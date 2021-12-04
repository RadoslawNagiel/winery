import { Channel, LocalNotifications } from "@capacitor/local-notifications";

import { DataService } from "./data.service";
import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Subscription } from "rxjs";
import { Wine } from "../utils/interfaces";
import { cloneDeep } from "lodash";

@Injectable({
  providedIn: `root`,
})
export class NotificationsService {
  notId = 0;
  dayTimestamp = 86400000;

  subscription: Subscription | undefined;

  constructor(
    private readonly platform: Platform,
    private readonly dataService: DataService
  ) {}

  async showNotification(text: string, title: string, date: Date) {
    const id = cloneDeep(this.notId);
    this.notId++;
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title,
          body: text,
          smallIcon: `demijohn_foreground.xml`,
          schedule: {
            at: date,
          },
          channelId: `chanel-1`,
        },
      ],
    });
  }

  async scheduleNotifications() {
    this.subscription = this.dataService.inProgresWinesListChange.subscribe(
      () => {
        this.scheduleNotifications();
      }
    );

    this.notId = 0;

    if (this.platform.is(`android`)) {
      await LocalNotifications.createChannel({
        id: `chanel-1`,
        name: `chanel1`,
        sound: `slap.wav`,
        importance: 5,
        visibility: 1,
        vibration: true,
      });
    }

    const allNotifications = await LocalNotifications.getPending();
    const promises = allNotifications.notifications.map((not) => {
      LocalNotifications.cancel({ notifications: [{ id: not.id }] });
    });
    await Promise.all(promises);

    const wines = this.dataService.inProgressWines;

    for (let wine of wines) {
      const nearest = this.getNearestStageDate(wine);
      if (nearest) {
        let date = nearest.date.setHours(12, 0, 0, 0);
        await this.showNotification(
          `${nearest.wineName} - ${nearest.stageName}`,
          `To już dzisiaj!`,
          new Date(date)
        );

        date = nearest.date.setHours(17, 0, 0, 0);
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

  ngOnDestoy() {
    this.subscription.unsubscribe();
  }
}
