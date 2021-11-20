import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ProductionstElementComponent } from "./production-list-element.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ProductionstElementComponent],
  exports: [ProductionstElementComponent],
})
export class ProductionstElementModule {}
