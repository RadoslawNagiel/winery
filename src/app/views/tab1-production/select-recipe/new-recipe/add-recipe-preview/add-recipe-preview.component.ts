import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Recipe, Sweetness, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast-service.service";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-add-recipe-preview",
  templateUrl: "./add-recipe-preview.component.html",
  styleUrls: ["./add-recipe-preview.component.scss"],
})
export class AddRecipePreviewComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() onBackClick = new EventEmitter();

  dayTimestamp = 86400000;

  statesDays = [];

  wine: Wine = {
    id: ``,
    name: ``,
    createDate: 0,
    capacity: 10,
    power: 10,
    yeast: `Drożdże winiarskie`,
    yeastTolerance: 12,
    sweetness: Sweetness.Półwytrawne,
    recipe: null,
    done: false,
    numberOfBottles: 0,
    stagesDone: [],
  };

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.wine.name = this.recipe.name;
    this.wine.recipe = this.recipe;
    this.statesDays = this.recipe.productStages.map(
      (stage) => stage.date / this.dayTimestamp
    );
  }

  async addRecipe() {
    if (!this.checkValid()) {
      this.toastService.presentToastError(`Wypełnij poprawnie dni`);
      return;
    }

    let index = 0;
    for (let state of this.statesDays) {
      this.recipe.productStages[index].date = state * this.dayTimestamp;
      ++index;
    }

    let lastIndex = this.recipe.productStages.length - 1;
    while (
      this.recipe.productStages[lastIndex].date -
        this.recipe.productStages[lastIndex - 1].date >=
      this.dayTimestamp * 84
    ) {
      const newState = cloneDeep(this.recipe.productStages[lastIndex - 1]);
      newState.date += this.dayTimestamp * 56;
      this.recipe.productStages.splice(lastIndex, 0, newState);
      ++lastIndex;
    }

    this.dataService.addRecipe(this.recipe);
    this.toastService.presentToastSuccess(`Dodano przepis`);
    await this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  checkValid() {
    if (this.statesDays[0] !== 0) {
      return false;
    }
    let lastDay = -1;
    for (let day of this.statesDays) {
      if (lastDay >= day) {
        return false;
      }
      lastDay = day;
    }
    return true;
  }

  backClick() {
    this.onBackClick.emit();
  }
}
