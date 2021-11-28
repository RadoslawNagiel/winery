import { Component } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { NotificationsService } from "src/app/services/notifications.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-production",
  templateUrl: "production.page.html",
  styleUrls: ["production.page.scss"],
})
export class ProductionPage {
  inProgressWines: Wine[] = [];
  showingWines: Wine[] = [];

  subscriptions: Subscription[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.inProgressWines = this.dataService.inProgressWines;
    this.searchChange(``);
    this.subscriptions.push(
      this.dataService.inProgresWinesListChange.subscribe(() => {
        this.inProgressWines = this.dataService.inProgressWines;
        this.searchChange(``);
      })
    );
  }

  async showWine(wineId: string) {
    await this.router.navigate([`/tabs/tab1/show-wine`], {
      queryParams: {
        index: wineId,
      },
    });
  }

  async newWineClick() {
    await this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  test() {
    this.notificationsService.showNotification(
      `Testowe powiadomienie po 30 sekundach`,
      new Date(Date.now() + 30000)
    );
    this.notificationsService.showNotification(
      `Testowe powiadomienie po 30 sekundach`,
      new Date(Date.now() + 3600000)
    );
    this.notificationsService.showNotification(
      `Testowe powiadomienie po 30 sekundach`,
      new Date(Date.now() + 7200000)
    );
    this.notificationsService.showNotificationTest();
  }

  searchChangeEvent(event: any) {
    this.searchChange(event.target.value);
  }

  searchChange(text: string) {
    if (text === ``) {
      this.showingWines = this.inProgressWines;
    } else {
      this.showingWines = this.inProgressWines.filter((wine) =>
        wine.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.showingWines = this.showingWines.sort((a, b) =>
      this.getNearestStageDate(a) > this.getNearestStageDate(b) ? 1 : -1
    );
  }

  getNearestStageDate(wine: Wine) {
    let index = 0;
    for (let stage of wine.stagesDone) {
      if (!stage) {
        break;
      }
      index++;
    }
    if (index === wine.stagesDone.length) {
      return Date.now();
    }
    return wine.recipe.productStages[index].date + wine.createDate;
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
