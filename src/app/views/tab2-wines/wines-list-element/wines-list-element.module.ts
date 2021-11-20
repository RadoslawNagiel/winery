import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { WinesListElementComponent } from "./wines-list-element.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [WinesListElementComponent],
  exports: [WinesListElementComponent],
})
export class WinesListElementModule {}
