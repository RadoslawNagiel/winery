import { Component, Input, OnInit } from "@angular/core";

import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-calc-blg",
  templateUrl: "./calc-blg.component.html",
  styleUrls: ["./calc-blg.component.scss"],
})
export class CalcBlgComponent implements OnInit {
  @Input() blg = 1;
  @Input() additionalSugar = 0;
  @Input() sugar = 10;
  @Input() weight = 1000;
  @Input() power = 1;

  ngOnInit() {
    this.changeBlg();
  }

  ngOnChanges(changes: any) {
    if (changes.sugar || changes.capacity) {
    }
    if (changes.syrup) {
    }
  }

  changeBlg() {
    if (this.blg < 0) {
      this.blg = 0;
    }
    if (this.additionalSugar < 0) {
      this.additionalSugar = 0;
    }
    if (this.weight < 0) {
      this.weight = 0;
    }
    this.sugar = this.blg * 10 * (this.weight / 1000) + this.additionalSugar;
    this.power = Math.round((this.sugar / 17) * 100) / 100;
  }

  changePower() {
    if (this.power < 0) {
      this.power = 0;
    }
    this.sugar = this.power * 17;
    this.additionalSugar = this.sugar - this.blg * 10 * (this.weight / 1000);
    if (this.additionalSugar < 0) {
      this.additionalSugar = 0;
      this.changeBlg();
    }
  }
}
