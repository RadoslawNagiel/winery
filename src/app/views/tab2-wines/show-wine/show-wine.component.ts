import { ActivatedRoute, Router } from "@angular/router";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Sweetness, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { IonDatetime } from "@ionic/angular";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-show-wine",
  templateUrl: "./show-wine.component.html",
  styleUrls: ["./show-wine.component.scss"],
})
export class ShowWineComponent implements OnInit {
  @ViewChild(`dateInput`) dateInput!: ElementRef<IonDatetime>;
  @Output() onBackClick = new EventEmitter();
  wine: Wine;

  nearestStageIndex = 0;

  Sweetness = Sweetness;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly toastService: ToastService
  ) {}

  ngOnInit() {
    this.wine = this.dataService.finishedWines.find(
      (wine) => wine.id === this.activatedRoute.snapshot.queryParams.index
    );
  }

  minusClick() {
    if (this.wine.numberOfBottles > 0) {
      --this.wine.numberOfBottles;
      this.dataService.winesListChange.next();
    }
  }

  plusClick() {
    ++this.wine.numberOfBottles;
    this.dataService.winesListChange.next();
  }

  changeAmount() {
    if (this.wine.numberOfBottles < 0 || this.wine.numberOfBottles === null) {
      this.wine.numberOfBottles = 0;
    }
    this.dataService.winesListChange.next();
  }

  async deleteWine() {
    const result = await this.toastService.presentToastWithOptions(
      `Czy na pewno chcesz usunąć to wino?`,
      `Usuń`
    );
    if (result) {
      this.confirmDelete();
    }
  }

  async confirmDelete() {
    this.dataService.deleteWine(this.wine.id);
    this.backClick();
  }

  async backClick() {
    await this.router.navigate([`/tabs/tab2`]);
  }
}
