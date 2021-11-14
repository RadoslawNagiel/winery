import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-wines-list",
  templateUrl: "./wines-list.component.html",
  styleUrls: ["./wines-list.component.scss"],
})
export class WinesListComponent implements OnInit {
  @Input() wineIndex: number;
  @Output() onWineSelect = new EventEmitter<number>();
  wine: Wine;
  nearestStageName = ``;
  nearestStageDate = 0;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.wine = this.dataService.inProgressWines[this.wineIndex];
    this.getNearestStage();
  }

  elementClick() {
    this.onWineSelect.emit(this.wineIndex);
    this.getNearestStage();
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
      this.nearestStageName = `Wino gotowe`;
      this.nearestStageDate = new Date().getTime();
      return;
    }
    this.nearestStageName = this.wine.recipe.productStages[index].name;
    this.nearestStageDate =
      this.wine.recipe.productStages[index].date + this.wine.createDate;
  }
}
