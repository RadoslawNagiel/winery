import { ActivatedRoute, Router } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Recipe } from "src/app/utils/interfaces";

@Component({
  selector: "app-show-recipe",
  templateUrl: "./show-recipe.component.html",
  styleUrls: ["./show-recipe.component.scss"],
})
export class ShowRecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private readonly router: Router,
    private readonly dataService: DataService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.recipe = this.dataService.recipes.find(
      (recipe) => recipe.id === this.activatedRoute.snapshot.queryParams.index
    );
  }

  async selectRecipe() {
    await this.router.navigate([`/tabs/tab1/select-recipe/new-wine`], {
      queryParams: {
        index: this.recipe.id,
      },
    });
  }
}
