import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-wines",
  templateUrl: "wines.page.html",
  styleUrls: ["wines.page.scss"],
})
export class WinesPageComponent {
  wines: Wine[] = [];
  showingWines: Wine[] = [];
  showingWinesNotAvailable: Wine[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.wines = this.dataService.finishedWines;
    this.searchChange(``);
    this.subscriptions.push(
      this.dataService.winesListChange.subscribe(() => {
        this.wines = this.dataService.finishedWines;
        this.searchChange(``);
      })
    );
  }

  async showWine(wineId: string) {
    await this.router.navigate([`/tabs/tab2/show-wine`], {
      queryParams: {
        index: wineId,
      },
    });
  }

  searchChangeEvent(event: any) {
    this.searchChange(event.target.value);
  }

  searchChange(text: string) {
    let wines = [];
    if (text === ``) {
      wines = this.wines;
    } else {
      wines = this.wines.filter((wine) =>
        wine.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    wines = wines.sort((a, b) => (a.createDate < b.createDate ? 1 : -1));

    this.showingWines = wines.filter((wine) => {
      return wine.numberOfBottles > 0;
    });
    this.showingWinesNotAvailable = wines.filter((wine) => {
      return wine.numberOfBottles === 0;
    });
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
