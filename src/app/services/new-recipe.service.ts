import { Injectable } from "@angular/core";
import { Recipe } from "../utils/interfaces";

@Injectable({
  providedIn: `root`,
})
export class NewRecipeService {
  recipe: Recipe;
}
