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
  ProductStage,
  ProductStageDescription,
  ProductionStage,
  Sweetness,
  Units,
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

  mustCreated = false;
  endFermentation = false;
  clearWine = false;

  dayTimestamp = 86400000;
  nextYear = new Date().getFullYear() + 1;

  nearestStageIndex = 0;
  nearestStage: ProductStageDescription;
  nearestDateInput = ``;

  Sweetness = Sweetness;
  ProductionStage = ProductionStage;

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

    this.mustCreated =
      this.wine.recipe.ingredients.find(
        (ingredient) => ingredient.name === `cukier`
      ) !== undefined;
  }

  undoStage() {
    this.endFermentation = false;
    this.clearWine = false;

    this.wine.stagesDone[this.nearestStageIndex - 1] = false;
    this.getNearestStage();
    this.dataService.inProgresWinesListChange.next();
    this.dataService.notificationUpdate.next();
  }

  async doStage() {
    this.endFermentation = false;
    this.clearWine = false;

    this.wine.stagesDone[this.nearestStageIndex] = true;
    this.getNearestStage();
    this.dataService.inProgresWinesListChange.next();
    this.dataService.notificationUpdate.next();
    if (this.nearestStageIndex === this.wine.stagesDone.length) {
      this.dataService.wineIsReady(this.wine.id);
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

  getHalfSugar() {
    return Math.round(this.getSugarValue() / 2) / 1000;
  }

  getSugarValue() {
    return Math.round(
      this.wine.recipe.ingredients.find((ing) => ing.name === `cukier`).value
    );
  }

  changeStageToDrainage() {
    const date = this.wine.recipe.productStages[this.nearestStageIndex].date;
    const stage: ProductStage = {
      name: ProductionStage.Drainage,
      date: date,
    };
    this.wine.recipe.productStages.splice(this.nearestStageIndex, 0, stage);
    this.wine.stagesDone.splice(this.nearestStageIndex, 0, false);

    const dateDifference = 28 * this.dayTimestamp;
    const length = this.wine.recipe.productStages.length;
    for (let i = this.nearestStageIndex + 1; i < length; ++i) {
      this.wine.recipe.productStages[i].date += dateDifference;
    }

    this.dataService.inProgresWinesListChange.next();
    this.getNearestStage();
    this.toastService.presentToastSuccess(`Dodano nowy etap`);
  }

  changeDate(event: any) {
    const value = event.detail.value;
    if (value !== `` && value != this.nearestDateInput) {
      const selectDate = new Date(value).getTime();
      const lastDate =
        this.wine.recipe.productStages[this.nearestStageIndex].date +
        this.wine.createDate;
      if (this.nearestStageIndex) {
        const earielStageDate =
          this.wine.recipe.productStages[this.nearestStageIndex - 1].date +
          this.wine.createDate;
        if (earielStageDate > selectDate) {
          this.toastService.presentToastError(
            `Data nie może być wcześniejsza niż poprzedni etap`
          );
          event.target.value = this.getNearestDate();
          return;
        }
      }
      const dateDifference = selectDate - lastDate;
      for (
        let i = this.nearestStageIndex;
        i < this.wine.recipe.productStages.length;
        ++i
      ) {
        this.wine.recipe.productStages[i].date += dateDifference;
      }
      this.toastService.presentToastSuccess(`Zmieniono datę`);
      this.dataService.inProgresWinesListChange.next();
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
    this.nearestStageIndex = index;
    if (index === this.wine.stagesDone.length) {
      return;
    }
    this.nearestStage = PRODUC_STAGES_DESCRIPTIONS.find(
      (stage) => stage.name === this.wine.recipe.productStages[index].name
    );
    this.nearestDateInput = this.getNearestDate();
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
    if (stageName === ProductionStage.StopFermentation) {
      return this.getStopFermentationDescription();
    }
    return description;
  }

  changeSugar(sugar: number) {
    this.wine.startSugar = sugar * this.wine.capacity;
  }

  changeSugarAccept() {
    this.mustCreated = true;
    const fullSugar =
      this.wine.capacity * this.wine.power * 17 - this.wine.startSugar;
    this.wine.recipe.ingredients.unshift({
      name: `cukier`,
      value: fullSugar,
      unit: Units.gramy,
    });
  }

  async openGuides(slug: string) {
    await this.router.navigate([`/tabs/tab3/${slug}`]);
    // await this.router.navigate([`/tabs/tab3/${slug}`], {
    //   queryParams: {
    //     backWine: this.wine.id,
    //   },
    // });
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

  confirmDelete() {
    this.dataService.deleteWine(this.wine.id);
    this.backClick();
  }

  async backClick() {
    await this.router.navigate([`/tabs/tab1`]);
  }
}
