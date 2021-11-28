import { CalcBlgModule } from "src/app/shared/calc-blg/calc-blg.module";
import { CalcGlucoseSyrupModule } from "src/app/shared/calc-glucose-syrup/calc-glucose-syrup.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GuidePageComponent } from "./guide-page/guide-page.component";
import { GuidesComponent } from "./guides.page";
import { GuidesRoutingModule } from "./guides-routing.module";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GuidesRoutingModule,
    CalcGlucoseSyrupModule,
    CalcBlgModule,
  ],
  declarations: [GuidesComponent, GuidePageComponent],
})
export class GuidesModule {}
