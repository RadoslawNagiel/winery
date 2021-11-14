import { Recipe, Wine } from "../utils/interfaces";

import { Injectable } from "@angular/core";
import { RECIPES } from "./recipes";
import { WINES } from "./const";

@Injectable({
  providedIn: `root`,
})
export class DataService {
  inProgressWines: Wine[] = [];
  recipes = RECIPES;

  constructor() {}

  loadWines() {
    this.inProgressWines = WINES;
    for (let wine of this.inProgressWines) {
      wine.recipe = RECIPES[Math.floor(Math.random() * RECIPES.length)];
    }
  }

  addWine(newWine: Wine) {
    this.inProgressWines.push(newWine);
    return this.inProgressWines.length - 1;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
