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
import { Sweetness, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-new-wine",
  templateUrl: "./new-wine.component.html",
  styleUrls: ["./new-wine.component.scss"],
})
export class NewWineComponent implements OnInit {
  today = ``;

  wine: Wine = {
    name: ``,
    createDate: 0,
    capacity: 0,
    power: 12,
    sweetness: 1,
    recipe: {
      name: ``,
      description: ``,
      ingredients: [],
      productStages: [],
    },
    stagesDone: [],
  };

  nameValid = true;
  capacityValid = true;

  Sweetness = Sweetness;

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.wine.recipe =
      this.dataService.recipes[this.activatedRoute.snapshot.queryParams.index];
    this.wine.name = this.wine.recipe.name;
    this.today = this.inputDateString(new Date());
  }

  inputDateString(date: Date) {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
  }

  backClick() {
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  nextClick() {
    this.wine.createDate = new Date(this.today).getTime();
    if (!this.checkValidate()) {
      this.toastService.presentToastError(`Uzupełnij poprawnie pola`);
      return;
    }
    const wineIndex = this.dataService.addWine(this.wine);
    this.toastService.presentToastSuccess(`Dodano wino`);
    void this.router.navigate([`/tabs/tab1/show-wine`], {
      queryParams: {
        index: wineIndex,
      },
    });
  }

  checkValidate() {
    this.nameValid = true;
    this.capacityValid = true;
    let valid = true;
    if (this.wine.name === ``) {
      this.nameValid = false;
      valid = false;
    }
    if (this.wine.capacity <= 0) {
      this.capacityValid = false;
      valid = false;
    }
    if (this.wine.createDate <= 0) {
      valid = false;
    }
    return valid;
  }
}
