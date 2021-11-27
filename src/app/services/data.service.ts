import { Recipe, Wine } from "../utils/interfaces";

import { GUIDES } from "../utils/guides";
import { Injectable } from "@angular/core";
import { RECIPES } from "../utils/recipes";
import { Subject } from "rxjs";
import { WINES } from "../utils/wines";

@Injectable({
  providedIn: `root`,
})
export class DataService {
  recipes = RECIPES;
  nextRecipeIndex = this.recipes.length;

  inProgressWines: Wine[] = [];
  finishedWines: Wine[] = [];
  nextWineIndex = 0;

  guides = GUIDES;

  inProgresWinesListChange = new Subject();
  recipesListChange = new Subject();
  winesListChange = new Subject();

  constructor() {}

  loadWines() {
    this.inProgressWines = WINES.filter((wine) => !wine.done);
    this.finishedWines = WINES.filter((wine) => wine.done);
    this.nextWineIndex = WINES.length;

    for (let wine of this.inProgressWines) {
      wine.recipe = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    }
    for (let wine of this.finishedWines) {
      wine.recipe = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    }
  }

  addWine(newWine: Wine) {
    this.nextWineIndex++;
    newWine.id = String(this.nextWineIndex);
    this.inProgressWines.push(newWine);
    this.inProgresWinesListChange.next();
    return newWine.id;
  }

  addRecipe(recipe: Recipe) {
    this.nextRecipeIndex++;
    recipe.id = String(this.nextRecipeIndex);
    this.recipes.push(recipe);
    this.recipesListChange.next();
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
  }
}
