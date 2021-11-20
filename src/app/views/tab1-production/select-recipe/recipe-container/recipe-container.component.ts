import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

import { Recipe } from "src/app/utils/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipe-container",
  templateUrl: "./recipe-container.component.html",
  styleUrls: ["./recipe-container.component.scss"],
})
export class RecipeContainerComponent implements OnInit {
  @Input() recipe!: Recipe;

  @Output() onWineSelect = new EventEmitter<string>();

  async ngOnInit() {}

  select() {
    this.onWineSelect.emit(this.recipe.id);
  }
}
