import { CalcBlgComponent } from "./calc-blg.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [CalcBlgComponent],
  exports: [CalcBlgComponent],
})
export class CalcBlgModule {}
