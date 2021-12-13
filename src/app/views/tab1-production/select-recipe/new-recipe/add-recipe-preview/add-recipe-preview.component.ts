import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Recipe, Sweetness, Units, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { PRODUC_STAGES_DESCRIPTIONS } from "src/app/utils/product-stages";
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
    addedSugar: 0,
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
    this.statesDays[4] = this.statesDays[3] + 0.5;
    this.statesDays[2] = this.statesDays[1] + 0.5;
    if (!this.checkValid()) {
      this.toastService.presentToastError(`Wypełnij poprawnie dni`);
      return;
    }

    let index = 0;
    for (let state of this.statesDays) {
      this.recipe.productStages[index].date = state * this.dayTimestamp;
      ++index;
    }

    this.checkIndex(2, this.dayTimestamp * 28);
    this.checkIndex(
      this.recipe.productStages.length - 2,
      this.dayTimestamp * 56
    );

    this.dataService.addRecipe(this.recipe);
    await this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  checkIndex(index: number, howManyDays: number) {
    this.recipe.productStages[index].date =
      this.recipe.productStages[index - 1].date + howManyDays;
    if (
      this.recipe.productStages[index + 1].date -
        this.recipe.productStages[index].date <
      howManyDays / 2
    ) {
      this.recipe.productStages.splice(index, 1);
      return;
    }

    while (
      this.recipe.productStages[index + 1].date -
        this.recipe.productStages[index].date >=
      howManyDays * 1.5
    ) {
      const newState = cloneDeep(this.recipe.productStages[index]);
      newState.date += howManyDays;
      this.recipe.productStages.splice(index + 1, 0, newState);
      ++index;
    }
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
  getPreparationDescription() {
    return PRODUC_STAGES_DESCRIPTIONS[0].descriptions[0];
  }

  backClick() {
    this.onBackClick.emit();
  }
}
