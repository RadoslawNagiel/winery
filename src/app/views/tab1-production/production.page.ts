import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-production",
  templateUrl: "production.page.html",
  styleUrls: ["production.page.scss"],
})
export class ProductionPage {
  inProgressWines: Wine[] = [];

  selectedWineIndex: number;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {
    this.dataService.loadWines();
    this.inProgressWines = this.dataService.inProgressWines;
  }

  showWine(wineIndex: number) {
    this.selectedWineIndex = wineIndex;
    void this.router.navigate([`/tabs/tab1/show-wine`], {
      queryParams: {
        index: wineIndex,
      },
    });
  }

  newWineClick() {
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }
}
