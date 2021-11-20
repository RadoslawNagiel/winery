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
    if (text === ``) {
      this.showingWines = this.wines;
    } else {
      this.showingWines = this.wines.filter((wine) =>
        wine.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.showingWines = this.showingWines.sort((a, b) =>
      a.createDate > b.createDate ? 1 : -1
    );
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
