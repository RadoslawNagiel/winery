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
import { ProductionStage, Sweetness, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { IonDatetime } from "@ionic/angular";

@Component({
  selector: "app-show-wine-in-progres",
  templateUrl: "./show-wine-in-progres.component.html",
  styleUrls: ["./show-wine-in-progres.component.scss"],
})
export class ShowWineInProgresComponent implements OnInit {
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
    this.wine = this.dataService.inProgressWines.find(
      (wine) => wine.id === this.activatedRoute.snapshot.queryParams.index
    );
    this.getNearestStage();
  }

  doStage() {
    this.wine.stagesDone[this.nearestStageIndex] = true;
    this.getNearestStage();
    this.dataService.winesListChange.next();

    if (this.nearestStageIndex === this.wine.stagesDone.length) {
      this.wine.done = true;
    }
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

  getNearestDate() {
    const date = new Date(
      this.wine.recipe.productStages[this.nearestStageIndex].date +
        this.wine.createDate
    );
    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    return `${date.getFullYear()}-${month}-${day}`;
  }

  getHints(stage: ProductionStage) {
    switch (stage) {
      case ProductionStage.Preparation:
        return [
          { name: `Fermentacja`, slug: `fermentacja` },
          { name: `Sterylizacja`, slug: `sterylizacja` },
          { name: `Syrop cukrowy`, slug: `przygotowywanie-syropu-cukrowego` },
        ];
      case ProductionStage.Straining:
        return [
          { name: `Syrop cukrowy`, slug: `przygotowywanie-syropu-cukrowego` },
        ];
      case ProductionStage.Drainage:
        return [{ name: `Zlewanie znad osadu`, slug: `zlewanie-znad-osadu` }];
      case ProductionStage.StopFermentation:
        return [
          { name: `Zatrzymanie fermentacji`, slug: `zatrzymanie-fermentacji` },
        ];
      case ProductionStage.Bottling:
        return [
          { name: `Butelkowanie`, slug: `butelkowanie-wina` },
          { name: `Sterylizacja`, slug: `sterylizacja` },
        ];
    }
  }

  async openGuides(slug: string) {
    await this.router.navigate([`/tabs/tab3/${slug}`]);
  }

  async backClick() {
    await this.router.navigate([`/tabs/tab1`]);
  }
}
