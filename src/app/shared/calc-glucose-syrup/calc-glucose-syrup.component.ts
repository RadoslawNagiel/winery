import { Component, Input, OnInit } from "@angular/core";

import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-calc-glucose-syrup",
  templateUrl: "./calc-glucose-syrup.component.html",
  styleUrls: ["./calc-glucose-syrup.component.scss"],
})
export class CalcGlucoseSyrupComponent implements OnInit {
  @Input() disableSugarEdit = false;
  @Input() sugar = 1;
  @Input() capacity = 1;
  @Input() syrup = 1.6;

  valueValid = true;

  constructor(private readonly toastService: ToastService) {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes.sugar || changes.capacity) {
      this.changeSugar();
    }
    if (changes.syrup) {
      this.changeSyrup();
    }
  }

  changeSugar() {
    if (this.sugar < 0) {
      this.sugar = 0;
    }
    if (this.capacity < 0) {
      this.capacity = 0;
    }

    this.syrup = Math.round((this.capacity + this.sugar * 0.6) * 100) / 100;
    this.checkValid();
  }

  changeSyrup() {
    if (this.syrup < 0) {
      this.syrup = 0;
    }

    this.capacity = Math.round((this.syrup - this.sugar * 0.6) * 100) / 100;

    if (this.capacity < 0) {
      this.capacity = 0;
      this.syrup = Math.round((this.capacity + this.sugar * 0.6) * 100) / 100;
    }

    this.checkValid();
  }

  checkValid() {
    if (this.capacity * 2 < this.sugar) {
      this.valueValid = false;
      this.toastService.presentToastError(
        `stosunek cukru do płynu powinien wynosić przynajmniej 2:1`
      );
      return;
    }
    this.valueValid = true;
  }
}
