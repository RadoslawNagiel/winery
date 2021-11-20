import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Tab2PageRoutingModule } from "./wines-routing.module";
import { WinesListElementModule } from "./wines-list-element/wines-list-element.module";
import { WinesPageComponent } from "./wines.page";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    WinesListElementModule,
  ],
  declarations: [WinesPageComponent],
})
export class WinesPageModule {}
