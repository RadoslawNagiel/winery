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
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.wine =
      this.dataService.inProgressWines[
        this.activatedRoute.snapshot.queryParams.index
      ];
    this.getNearestStage();
  }

  doStage() {
    this.wine.stagesDone[this.nearestStageIndex] = true;
    this.getNearestStage();
  }

  changeDate(event: any) {
    const value = event.detail.value;
    if (value !== ``) {
      const selectDate = new Date(value).getTime();
      const lastDate =
        this.wine.recipe.productStages[this.nearestStageIndex].date +
        this.wine.createDate;
      const dateDifference = selectDate - lastDate;
      for (
        let i = this.nearestStageIndex;
        i < this.wine.recipe.productStages.length;
        ++i
      ) {
        this.wine.recipe.productStages[i].date += dateDifference;
      }
      event.target.value = ``;
    }
  }

  getNearestStage() {
    let index = 0;
    for (let stage of this.wine.stagesDone) {
      if (!stage) {
        break;
      }
      index++;
    }
    if (index === this.wine.stagesDone.length) {
      return;
    }
    this.nearestStageIndex = index;
  }

  backClick() {
    void this.router.navigate([`/tabs/tab1`]);
  }
}
