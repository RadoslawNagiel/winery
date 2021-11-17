import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TextInfoComponent } from "./text-info.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [TextInfoComponent],
  exports: [TextInfoComponent],
})
export class TextInfoModule {}
