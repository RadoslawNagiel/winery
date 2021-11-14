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
  selector: "app-add-wine",
  templateUrl: "./add-wine.component.html",
  styleUrls: ["./add-wine.component.scss"],
})
export class AddWineComponent implements OnInit {
  @Output() onBackClick = new EventEmitter();

  today = ``;

  wine: Wine = {
    name: ``,
    createDate: 0,
    capacity: 0,
    power: 12,
    sweetness: 1,
    recipe: null,
    stagesDone: [],
  };

  nameValid = true;

  Sweetness = Sweetness;

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService
  ) {}

  async ngOnInit() {
    this.today = this.inputDateString(new Date());
  }

  inputDateString(date: Date) {
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
  }

  backClick() {
    this.onBackClick.emit();
  }

  nextClick() {
    this.wine.createDate = new Date(this.today).getTime();
    if (!this.checkValidate()) {
      this.toastService.presentToastError(`Uzupełnij poprawnie pola`);
      return;
    }
    this.dataService.addWine(this.wine);
    this.toastService.presentToastSuccess(`Dodano wino`);
    this.onBackClick.emit();
  }

  checkValidate() {
    this.nameValid = true;
    let valid = true;
    if (this.wine.name === ``) {
      this.nameValid = false;
      valid = false;
    }
    if (this.wine.createDate <= 0) {
      valid = false;
    }
    return valid;
  }

  // if (!this.wine.ingredients.length) {
  //   this.ingredientsValid = false;
  //   valid = false;
  // }
  // let index = 0;
  // for (let ingredient of this.wine.ingredients) {
  //   this.ingredientsValidElements.push({ name: true, value: true });
  //   if (ingredient.name === ``) {
  //     this.ingredientsValidElements[index].name = false;
  //     valid = false;
  //     this.ingredientsValid = false;
  //   }
  //   if (ingredient.weight <= 0) {
  //     this.ingredientsValidElements[index].value = false;
  //     valid = false;
  //     this.ingredientsValid = false;
  //   }
  //   ++index;
  // }

  // newIngredientClick() {
  //   this.ingredientsValidElements.push({ name: true, value: true });
  //   this.wine.ingredients.push({ name: ``, weight: 0 });
  // }

  // deleteIngredientClick(index: number) {
  //   if (this.wine.ingredients.length > 1) {
  //     this.wine.ingredients.splice(index, 1);
  //     this.ingredientsValidElements.splice(index, 1);
  //   }
  // }
}
