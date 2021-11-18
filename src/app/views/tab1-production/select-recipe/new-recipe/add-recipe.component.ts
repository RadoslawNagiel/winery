import { Component, OnInit } from "@angular/core";

import { PRODUC_STAGES } from "./const";
import { Recipe } from "src/app/utils/interfaces";
import { ToastService } from "src/app/services/toast-service.service";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"],
})
export class AddRecipeComponent implements OnInit {
  recipe: Recipe = {
    id: ``,
    name: ``,
    description: ``,
    ingredients: [{ name: ``, value: 0, unit: `` }],
    productStages: cloneDeep(PRODUC_STAGES),
  };

  mustDescription = ``;
  sugar = 0;

  nameValid = true;
  descriptionValid = true;
  sugarValid = true;
  mustDescriptionValid = true;

  showPreview = false;

  ingredientsValidElements: { name: boolean; value: boolean; unit: boolean }[] =
    [{ name: true, value: true, unit: true }];

  constructor(private readonly toastService: ToastService) {}

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

  addRecipe() {
    this.recipe.productStages[0].description = this.mustDescription;
    if (this.sugar > 0) {
      this.recipe.ingredients.unshift({
        name: `cukier`,
        value: this.sugar,
        unit: `g.`,
      });
    }
    // if (!this.checkValidate()) {
    //   this.toastService.presentToastError(`Uzupełnij poprawnie pola`);
    //   return;
    // }
    this.showPreview = true;
  }

  checkValidate() {
    this.nameValid = true;
    this.descriptionValid = true;
    this.sugarValid = true;
    this.mustDescriptionValid = true;
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
    if (this.sugar < 0) {
      this.sugarValid = false;
      valid = false;
    }
    if (!this.recipe.ingredients.length) {
      valid = false;
    }
    if (this.mustDescription === ``) {
      this.mustDescriptionValid = false;
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
