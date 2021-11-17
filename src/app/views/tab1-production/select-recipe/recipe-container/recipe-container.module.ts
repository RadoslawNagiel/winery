import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RecipeContainerComponent } from "./recipe-container.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RecipeContainerComponent],
  exports: [RecipeContainerComponent],
})
export class RecipeContainerModule {}
