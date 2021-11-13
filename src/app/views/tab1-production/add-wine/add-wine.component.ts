import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Ingredient } from "src/app/utils/interfaces";

@Component({
  selector: "app-add-wine",
  templateUrl: "./add-wine.component.html",
  styleUrls: ["./add-wine.component.scss"],
})
export class AddWineComponent implements OnInit {
  @Output() onBackClick = new EventEmitter();

  ingredients: Ingredient[] = [{ name: ``, weight: 0 }];

  constructor() {}

  ngOnInit() {}

  backClick() {
    this.onBackClick.emit();
  }

  nextClick() {}

  newIngredientClick() {
    this.ingredients.push({ name: ``, weight: 0 });
  }

  deleteIngredientClick(index: number) {
    this.ingredients.splice(index, 1);
  }
}
