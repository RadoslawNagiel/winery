import { Injectable } from "@angular/core";
import { LocalNotifications } from "@capacitor/local-notifications";

@Injectable({
  providedIn: `root`,
})
export class NotificationsService {
  notId = 0;

  async showNotification(text: string, date: Date) {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: this.notId,
          title: `Winery`,
          body: text,
          sound: "file://sound.mp3",
          // smallIcon: "demijohn_foreground.xml",
          schedule: {
            at: date,
            allowWhileIdle: true,
          },
        },
      ],
    });
    this.notId++;
  }

  async showNotificationTest() {
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 999,
          title: `Winery`,
          body: `Test`,
          // sound: "file://sound.mp3",
          // smallIcon: "demijohn_foreground.xml",
          schedule: {
            at: new Date(),
            every: `hour`,
            count: 12,
            allowWhileIdle: true,
          },
        },
      ],
    });
  }
}
