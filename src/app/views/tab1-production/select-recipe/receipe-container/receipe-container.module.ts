import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ReceipeContainerComponent } from "./receipe-container.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ReceipeContainerComponent],
  exports: [ReceipeContainerComponent],
})
export class ReceipeContainerModule {}
