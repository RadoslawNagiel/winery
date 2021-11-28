import { CalcGlucoseSyrupComponent } from "./calc-glucose-syrup.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CalcGlucoseSyrupComponent],
  exports: [CalcGlucoseSyrupComponent],
})
export class CalcGlucoseSyrupModule {}
