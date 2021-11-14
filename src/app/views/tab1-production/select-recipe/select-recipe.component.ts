import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Recipe } from "src/app/utils/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-select-recipe",
  templateUrl: "./select-recipe.component.html",
  styleUrls: ["./select-recipe.component.scss"],
})
export class SelectRecipeComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.recipes = this.dataService.recipes;
  }

  newRecipe() {
    void this.router.navigate([`/tabs/tab1/select-recipe/new-recipe`]);
  }

  backClick() {
    void this.router.navigate([`/tabs/tab1`]);
  }
}
