import { ActivatedRoute, Router } from "@angular/router";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Sweetness, Units, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { ToastService } from "src/app/services/toast-service.service";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-new-wine",
  templateUrl: "./new-wine.component.html",
  styleUrls: ["./new-wine.component.scss"],
})
export class NewWineComponent implements OnInit {
  today = ``;

  nextYear = new Date().getFullYear() + 1;

  wine: Wine = {
    id: ``,
    name: ``,
    createDate: 0,
    capacity: null,
    power: 12,
    sweetness: 1,
    yeast: ``,
    yeastTolerance: 12,
    startSugar: 0,
    recipe: {
      id: ``,
      name: ``,
      ingredients: [],
      productStages: [],
    },
    numberOfBottles: 0,
    done: false,
    stagesDone: [],
  };

  nameValid = true;
  capacityValid = true;
  yeastValid = true;

  Sweetness = Sweetness;

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.wine.recipe = cloneDeep(
      this.dataService.allRecipes.find(
        (recipe) => recipe.id === this.activatedRoute.snapshot.queryParams.index
      )
    );
    this.wine.name = this.wine.recipe.name;
    this.today = this.inputDateString(new Date());
  }

  inputDateString(date: Date) {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
  }

  async nextClick() {
    this.wine.createDate = new Date(this.today).getTime();
    this.wine.stagesDone = new Array(
      this.wine.recipe.productStages.length
    ).fill(false);

    if (!this.checkValidate()) {
      this.toastService.presentToastError(`Uzupełnij poprawnie pola`);
      return;
    }
    for (let ingredient of this.wine.recipe.ingredients) {
      ingredient.value =
        Math.round(ingredient.value * this.wine.capacity * 100) / 1000;
    }
    const wineIndex = this.dataService.addWine(this.wine);
    this.dataService.notificationUpdate.next();
    await this.router.navigate([`/tabs/tab1/show-wine`], {
      queryParams: {
        index: wineIndex,
      },
    });
  }

  checkValidate() {
    this.nameValid = true;
    this.yeastValid = true;
    this.capacityValid = true;
    let valid = true;
    if (this.wine.name === ``) {
      this.nameValid = false;
      valid = false;
    }
    if (this.wine.yeast === ``) {
      this.yeastValid = false;
      valid = false;
    }
    if (this.wine.capacity <= 0) {
      this.capacityValid = false;
      valid = false;
    }
    if (this.wine.createDate <= 0) {
      valid = false;
    }
    if (this.wine.yeastTolerance < this.wine.power) {
      valid = false;
    }
    return valid;
  }

  yeastToleranceChange() {
    if (this.wine.yeastTolerance < this.wine.power) {
      this.wine.power = this.wine.yeastTolerance;
    }
  }
}
