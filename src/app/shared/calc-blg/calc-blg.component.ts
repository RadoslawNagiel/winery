import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-calc-blg",
  templateUrl: "./calc-blg.component.html",
  styleUrls: ["./calc-blg.component.scss"],
})
export class CalcBlgComponent {
  @Input() blg = 0;
  @Input() additionalSugar = 0;
  @Input() sugar = 10;
  @Input() weight = 1000;
  @Input() power = 1;
  @Input() onlyBlg = false;

  @Output() onsugarChanged = new EventEmitter<number>();

  ngOnChanges(changes: any) {
    if (changes.blg || changes.weight) {
      this.changedBlgOrWeight();
    }
    if (changes.power) {
      this.changedPower();
    }
  }

  changedBlgOrWeight() {
    if (this.blg < 0) {
      this.blg = 0;
    }
    if (this.blg > 100) {
      this.blg = 100;
    }
    if (this.weight < 0) {
      this.weight = 0;
    }
    if (this.additionalSugar > 0) {
      this.changedPower();
      return;
    }

    const sugar = this.blg * 10 * (this.weight / 1000) + this.additionalSugar;
    this.sugar = Math.round(sugar * 100) / 100;

    const power = this.sugar / 17;
    this.power = Math.round(power * 100) / 100;
    this.onsugarChanged.emit(this.sugar);
  }

  changedPower() {
    if (this.power < 0) {
      this.power = 0;
    }

    this.sugar = this.power * 17;
    this.additionalSugar = this.sugar - this.blg * 10 * (this.weight / 1000);
    if (this.additionalSugar < 0) {
      this.additionalSugar = 0;
      this.changedBlgOrWeight();
      return;
    }
    this.onsugarChanged.emit(this.sugar);
  }
}
