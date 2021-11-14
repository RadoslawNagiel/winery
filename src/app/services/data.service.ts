import { Injectable } from "@angular/core";
import { RECIPES } from "./recipes";
import { WINES } from "./const";
import { Wine } from "../utils/interfaces";

@Injectable({
  providedIn: `root`,
})
export class DataService {
  inProgressWines: Wine[] = [];

  constructor() {}

  loadWines() {
    this.inProgressWines = WINES;
    for (let wine of this.inProgressWines) {
      wine.recipe = RECIPES[0];
    }
  }

  addWine(newWine: Wine) {
    this.inProgressWines.push(newWine);
  }
}
