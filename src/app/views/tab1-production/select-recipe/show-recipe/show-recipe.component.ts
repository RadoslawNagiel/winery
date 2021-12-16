import { ActivatedRoute, Router } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";
import { ProductionStage, Recipe } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { PRODUC_STAGES_DESCRIPTIONS } from "src/app/utils/product-stages";

@Component({
  selector: "app-show-recipe",
  templateUrl: "./show-recipe.component.html",
  styleUrls: ["./show-recipe.component.scss"],
})
export class ShowRecipeComponent implements OnInit {
  recipe: Recipe;

  ProductionStage = ProductionStage;

  constructor(
    private readonly router: Router,
    private readonly dataService: DataService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.recipe = this.dataService.allRecipes.find(
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

  getStageDescription(stageName: ProductionStage) {
    let description = PRODUC_STAGES_DESCRIPTIONS.find(
      (description) => description.name === stageName
    ).description;
    if (stageName === ProductionStage.Preparation) {
      description =
        this.recipe.productStages[0].description + ` ` + description;
    }
    if (stageName === ProductionStage.StopFermentation) {
      return (
        `(Opis różny w zależności od słodkości i mocy wina) ` +
        PRODUC_STAGES_DESCRIPTIONS.find(
          (description) => description.name === stageName
        ).descriptions[2]
      );
    }
    return description;
  }
}
