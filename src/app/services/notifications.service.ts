import { Channel, LocalNotifications } from "@capacitor/local-notifications";

import { DataService } from "./data.service";
import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { Wine } from "../utils/interfaces";
import { cloneDeep } from "lodash";

@Injectable({
  providedIn: `root`,
})
export class NotificationsService {
  notId = 0;
  dayTimestamp = 86400000;

  subscriptions: Subscription[] = [];

  constructor(private readonly dataService: DataService) {
    LocalNotifications.createChannel({
      id: `chanel-1`,
      name: `chanel-1`,
      vibration: true,
      importance: 5,
      visibility: 1,
    });
  }

  async ngOnInit() {
    this.subscriptions.push(
      this.dataService.notificationUpdate.subscribe(() => {
        this.scheduleNotifications();
      })
    );
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  async showNotification(text: string, title: string, date: Date) {
    const id = cloneDeep(this.notId);
    this.notId++;
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title,
          iconColor: `#7a1616`,
          body: text,
          smallIcon: `demijohn_foreground.xml`,
          channelId: `chanel-1`,
          schedule: {
            at: date,
          },
        },
      ],
    });
  }

  async scheduleNotifications() {
    await LocalNotifications.createChannel({
      id: `chanel-1`,
      name: `chanel-1`,
      vibration: true,
      importance: 5,
      visibility: 1,
    });

    this.notId = 0;

    const allNotifications = await LocalNotifications.getPending();
    if (allNotifications) {
      await Promise.all(
        allNotifications.notifications.map((not) => {
          LocalNotifications.cancel({ notifications: [{ id: not.id }] });
        })
      );
    }
    const wines = this.dataService.inProgressWines;

    for (let wine of wines) {
      const nearest = this.getNearestStageDate(wine);
      if (nearest) {
        let date = nearest.date.setHours(16, 0, 0, 0);
        await this.showNotification(
          `${nearest.wineName} - ${nearest.stageName}`,
          `To już dzisiaj!`,
          new Date(date)
        );

        date = nearest.date.setHours(18, 0, 0, 0);
        await this.showNotification(
          `${nearest.wineName} - ${nearest.stageName}`,
          `Nie zapomnij!`,
          new Date(date)
        );

        date = nearest.date.setHours(12, 0, 0, 0) - this.dayTimestamp;
        if (date > Date.now()) {
          await this.showNotification(
            `${nearest.wineName} - ${nearest.stageName}`,
            `To już jutro!`,
            new Date(date)
          );
        }
      }
    }
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
      return false;
    }
    return {
      wineName: wine.name,
      stageName: wine.recipe.productStages[index].name,
      date: new Date(wine.recipe.productStages[index].date + wine.createDate),
    };
  }
}
