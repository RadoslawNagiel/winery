import { Component } from "@angular/core";
import { DataService } from "./services/data.service";
import { NotificationsService } from "./services/notifications.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private readonly dataService: DataService,
    private readonly notificationsService: NotificationsService
  ) {}

  async ngOnInit() {
    await this.dataService.loadWines();
    await this.notificationsService.scheduleNotifications();
  }

  async ngOnDestroy() {
    await this.notificationsService.scheduleNotifications();
  }
}
