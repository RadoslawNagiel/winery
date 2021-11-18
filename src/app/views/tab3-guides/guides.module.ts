import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
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
    RouterModule.forChild([{ path: "", component: GuidesComponent }]),
    GuidesRoutingModule,
  ],
  declarations: [GuidesComponent],
})
export class GuidesModule {}
