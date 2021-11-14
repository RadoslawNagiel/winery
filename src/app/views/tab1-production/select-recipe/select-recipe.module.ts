import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ReceipeContainerModule } from "./receipe-container/receipe-container.module";
import { RouterModule } from "@angular/router";
import { SelectRecipeComponent } from "./select-recipe.component";
import { SelectRecipeRoutingModule } from "./select-recipe-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRecipeRoutingModule,
    ReceipeContainerModule,
  ],
  declarations: [SelectRecipeComponent],
  exports: [SelectRecipeComponent],
})
export class SelectRecipeModule {}
