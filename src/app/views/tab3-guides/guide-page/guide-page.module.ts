import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { GuidePageComponent } from "./guide-page.component";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [GuidePageComponent],
  exports: [GuidePageComponent],
})
export class GuidePageModule {}
