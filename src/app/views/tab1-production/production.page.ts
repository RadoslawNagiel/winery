import { Component } from "@angular/core";
import { WINES } from "./const";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-production",
  templateUrl: "production.page.html",
  styleUrls: ["production.page.scss"],
})
export class ProductionPage {
  wines = WINES;
  page = `wines`;

  selectedWine: Wine;

  constructor() {}

  showWine(wine: Wine) {
    this.selectedWine = wine;
    this.page = `show-wine`;
  }

  showWineList() {
    this.page = `wines`;
  }

  newWineClick() {
    this.page = `new-wine`;
  }
}
