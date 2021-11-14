import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Recipe } from "src/app/utils/interfaces";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"],
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    name: ``,
    description: ``,
    ingredients: [{ name: ``, value: 0, unit: `` }],
    productStages: [],
  };

  nameValid = true;
  descriptionValid = true;
  ingredientsValidElements: { name: boolean; value: boolean; unit: boolean }[] =
    [{ name: true, value: true, unit: true }];

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  async ngOnInit() {}

  newIngredientClick() {
    this.ingredientsValidElements.push({ name: true, value: true, unit: true });
    this.recipe.ingredients.push({ name: ``, value: 0, unit: `` });
  }

  deleteIngredientClick(index: number) {
    if (this.recipe.ingredients.length > 1) {
      this.recipe.ingredients.splice(index, 1);
      this.ingredientsValidElements.splice(index, 1);
    }
  }

  backClick() {
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  addRecipe() {
    if (!this.checkValidate()) {
      this.toastService.presentToastError(`Uzupełnij poprawnie pola`);
      return;
    }
    this.dataService.addRecipe(this.recipe);
    this.toastService.presentToastSuccess(`Dodano przepis`);
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  nextClick() {}

  checkValidate() {
    this.nameValid = true;
    this.descriptionValid = true;
    this.ingredientsValidElements = [];
    let valid = true;
    if (this.recipe.name === ``) {
      this.nameValid = false;
      valid = false;
    }
    if (this.recipe.description === ``) {
      this.descriptionValid = false;
      valid = false;
    }

    if (!this.recipe.ingredients.length) {
      valid = false;
    }
    let index = 0;
    for (let ingredient of this.recipe.ingredients) {
      this.ingredientsValidElements.push({
        name: true,
        value: true,
        unit: true,
      });
      if (ingredient.name === ``) {
        this.ingredientsValidElements[index].name = false;
        valid = false;
      }
      if (ingredient.value <= 0) {
        this.ingredientsValidElements[index].value = false;
        valid = false;
      }
      if (ingredient.unit === ``) {
        this.ingredientsValidElements[index].unit = false;
        valid = false;
      }
      ++index;
    }
    return valid;
  }
}
