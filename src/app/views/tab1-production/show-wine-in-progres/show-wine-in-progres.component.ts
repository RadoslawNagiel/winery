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
import { IonDatetime, NavController } from "@ionic/angular";
import {
  ProductStageDescription,
  ProductionStage,
  Sweetness,
  Wine,
} from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { PRODUC_STAGES_DESCRIPTIONS } from "src/app/utils/product-stages";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-show-wine-in-progres",
  templateUrl: "./show-wine-in-progres.component.html",
  styleUrls: ["./show-wine-in-progres.component.scss"],
})
export class ShowWineInProgresComponent implements OnInit {
  @ViewChild(`dateInput`) dateInput!: ElementRef<IonDatetime>;
  @Output() onBackClick = new EventEmitter();
  wine: Wine;

  nextYear = new Date().getFullYear() + 1;

  nearestStageIndex = 0;
  nearestStage: ProductStageDescription;

  Sweetness = Sweetness;

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly toastService: ToastService
  ) {}

  async ngOnInit() {
    this.wine = this.dataService.inProgressWines.find(
      (wine) => wine.id === this.activatedRoute.snapshot.queryParams.index
    );
    this.getNearestStage();
  }

  async doStage() {
    this.wine.stagesDone[this.nearestStageIndex] = true;
    this.getNearestStage();
    this.dataService.inProgresWinesListChange.next();

    if (this.nearestStageIndex === this.wine.stagesDone.length - 1) {
      this.dataService.wineIsReady(this.wine.id);
      this.toastService.presentToastSuccess(`Wino gotowe!`);
      await this.router.navigate([`/tabs/tab1`], {
        skipLocationChange: true,
      });

      await this.router.navigate([`/tabs/tab2/show-wine`], {
        queryParams: {
          index: this.wine.id,
        },
      });
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
    this.nearestStage = PRODUC_STAGES_DESCRIPTIONS.find(
      (stage) => stage.name === this.wine.recipe.productStages[index].name
    );
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

  getStopFermentationDescription() {
    if (this.wine.sweetness === Sweetness.Wytrawne) {
      return this.nearestStage.descriptions[0];
    }
    if (this.wine.yeastTolerance === this.wine.power) {
      return this.nearestStage.descriptions[1];
    }
    return this.nearestStage.descriptions[2];
  }

  getStageDescription(stageName: ProductionStage) {
    let description = PRODUC_STAGES_DESCRIPTIONS.find(
      (description) => description.name === stageName
    ).description;
    if (stageName === ProductionStage.Preparation) {
      description = this.nearestStage.description + ` ` + description;
    }
    if (stageName === ProductionStage.StopFermentation) {
      return this.getStopFermentationDescription();
    }
    return description;
  }

  async openGuides(slug: string) {
    await this.router.navigate([`/tabs/tab3/${slug}`], {
      queryParams: {
        backWine: this.wine.id,
      },
    });
  }

  async backClick() {
    await this.router.navigate([`/tabs/tab1`]);
  }
}
