import { Recipe, Wine } from "../utils/interfaces";

import { GUIDES } from "./guides";
import { Injectable } from "@angular/core";
import { RECIPES } from "./recipes";
import { Subject } from "rxjs";
import { WINES } from "./const";

@Injectable({
  providedIn: `root`,
})
export class DataService {
  recipes = RECIPES;
  nextRecipeIndex = this.recipes.length;

  inProgressWines: Wine[] = WINES;
  nextWineIndex = this.inProgressWines.length;

  guides = GUIDES;

  winesListChange = new Subject();
  recipesListChange = new Subject();

  constructor() {}

  loadWines() {
    for (let wine of this.inProgressWines) {
      wine.recipe = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    }
  }

  addWine(newWine: Wine) {
    this.nextWineIndex++;
    newWine.id = String(this.nextWineIndex);
    this.inProgressWines.push(newWine);
    this.winesListChange.next();
    return newWine.id;
  }

  addRecipe(recipe: Recipe) {
    this.nextRecipeIndex++;
    recipe.id = String(this.nextRecipeIndex);
    this.recipes.push(recipe);
    this.recipesListChange.next();
  }
}
