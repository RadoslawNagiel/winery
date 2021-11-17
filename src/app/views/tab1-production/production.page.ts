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
  showingWines: Wine[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {
    this.dataService.loadWines();
    this.inProgressWines = this.dataService.inProgressWines;
    this.showingWines = this.inProgressWines;
  }

  showWine(wineIndex: number) {
    const index = this.inProgressWines.findIndex(
      (wine) => wine === this.showingWines[wineIndex]
    );
    void this.router.navigate([`/tabs/tab1/show-wine`], {
      queryParams: {
        index: index,
      },
    });
  }

  newWineClick() {
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  searchChange(event: any) {
    if (event.target.value === ``) {
      this.showingWines = this.inProgressWines;
      return;
    }
    this.showingWines = this.inProgressWines.filter((wine) =>
      wine.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }
}
