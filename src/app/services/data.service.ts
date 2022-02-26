import { Recipe, Wine } from "../utils/interfaces";
import { Subject, Subscription } from "rxjs";

import { GUIDES } from "../utils/guides";
import { Injectable } from "@angular/core";
import { PRODUC_STAGES } from "../utils/product-stages";
import { RECIPES } from "../utils/recipes";
import { Storage } from "@ionic/storage-angular";
import { ToastService } from "./toast-service.service";
import { cloneDeep } from "lodash";

@Injectable({
  providedIn: `root`,
})
export class DataService {
  private _storage: Storage | null = null;

  recipes = [];
  allRecipes: Recipe[] = [];

  inProgressWines: Wine[] = [];
  finishedWines: Wine[] = [];

  guides = GUIDES;

  inProgresWinesListChange = new Subject();
  winesListChange = new Subject();
  recipesListChange = new Subject();
  notificationUpdate = new Subject();

  subscriptions: Subscription[] = [];

  constructor(
    private readonly storage: Storage,
    private readonly toastService: ToastService
  ) {}

  fireSubscriptions() {
    this.subscriptions.push(
      this.inProgresWinesListChange.subscribe(() => {
        this.updateWineStorage();
      })
    );
    this.subscriptions.push(
      this.winesListChange.subscribe(() => {
        this.updateWineStorage();
      })
    );
    this.subscriptions.push(
      this.recipesListChange.subscribe(() => {
        this.updateRecipeStorage();
      })
    );
  }

  async loadWines() {
    this.fireSubscriptions();
    this._storage = await this.storage.create();

    const wines = await this._storage.get(`wines`);
    if (wines) {
      this.inProgressWines = wines.filter((wine) => !wine.done);
      this.finishedWines = wines.filter((wine) => wine.done);
    }
    this.allRecipes = RECIPES;
    let id = 0;
    for (let recipe of this.allRecipes) {
      recipe.id = `s-${id}`;
      ++id;
      const description = cloneDeep(recipe.productStages[0].description);
      recipe.productStages = cloneDeep(PRODUC_STAGES);
      recipe.productStages[0].description = description;
    }
    const recipes = await this._storage.get(`recipes`);
    if (recipes) {
      this.allRecipes.push(...recipes);
      this.recipes = recipes;
    }
  }

  updateWineStorage() {
    const wines = [];
    wines.push(...this.inProgressWines);
    wines.push(...this.finishedWines);
    this._storage.set(`wines`, wines);
  }

  updateRecipeStorage() {
    this._storage.set(`recipes`, this.recipes);
  }

  addWine(newWine: Wine) {
    newWine.id = String(this.generateId());
    this.inProgressWines.push(newWine);
    this.inProgresWinesListChange.next();
    this.toastService.presentToastSuccess(`Dodano wino`);
    return newWine.id;
  }

  deleteWine(wineId: string) {
    let index = this.inProgressWines.findIndex((wine) => wine.id === wineId);
    if (index === -1) {
      index = this.finishedWines.findIndex((wine) => wine.id === wineId);
      if (index === -1) {
        return;
      }
      this.finishedWines.splice(index, 1);
      this.winesListChange.next();
      this.toastService.presentToastSuccess(`Wino zostało usunięte`);
      return;
    }
    this.inProgressWines.splice(index, 1);
    this.inProgresWinesListChange.next();
    this.toastService.presentToastSuccess(`Wino zostało usunięte`);
  }

  addRecipe(recipe: Recipe) {
    recipe.id = String(this.generateId());
    this.recipes.push(recipe);
    this.allRecipes.push(recipe);
    this.recipesListChange.next();
    this.toastService.presentToastSuccess(`Dodano przepis`);
  }

  deleteRecipe(recipeId: string) {
    let recipesindex = this.recipes.findIndex((wine) => wine.id === recipeId);
    let allRecipesIndex = this.allRecipes.findIndex(
      (wine) => wine.id === recipeId
    );
    if (recipesindex !== -1) {
      this.recipes.splice(recipesindex, 1);
      this.allRecipes.splice(allRecipesIndex, 1);
      this.recipesListChange.next();
      this.toastService.presentToastSuccess(`Przepis został usunięty`);
    }
  }

  wineIsReady(wineId: string) {
    const wine = this.inProgressWines.find((wine) => wine.id === wineId);
    const index = this.inProgressWines.findIndex((wine) => wine.id === wineId);
    this.inProgressWines.splice(index, 1);
    wine.done = true;
    wine.numberOfBottles = Math.floor(wine.capacity / 0.75);
    this.finishedWines.push(wine);
    this.inProgresWinesListChange.next();
    this.winesListChange.next();
    this.toastService.presentToastSuccess(`Wino gotowe!`);
  }

  generateId() {
    return (
      Math.random()
        .toString(36)
        .substr(2, 9) +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
