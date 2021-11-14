import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-production",
  templateUrl: "production.page.html",
  styleUrls: ["production.page.scss"],
})
export class ProductionPage {
  inProgressWines: Wine[] = [];
  page = `wines`;

  selectedWineIndex: number;

  constructor(private readonly dataService: DataService) {
    this.dataService.loadWines();
    this.inProgressWines = this.dataService.inProgressWines;
  }

  showWine(wineIndex: number) {
    this.selectedWineIndex = wineIndex;
    this.page = `show-wine`;
  }

  showWineList() {
    this.page = `wines`;
  }

  newWineClick() {
    this.page = `new-wine`;
  }
}
