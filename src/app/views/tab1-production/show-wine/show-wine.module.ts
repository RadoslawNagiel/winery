import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ShowWineComponent } from "./show-wine.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ShowWineComponent],
  exports: [ShowWineComponent],
})
export class ShowWineModule {}
