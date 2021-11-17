import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RecipeContainerModule } from "./recipe-container/recipe-container.module";
import { RouterModule } from "@angular/router";
import { SelectRecipeComponent } from "./select-recipe.component";
import { SelectRecipeRoutingModule } from "./select-recipe-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRecipeRoutingModule,
    RecipeContainerModule,
  ],
  declarations: [SelectRecipeComponent],
  exports: [SelectRecipeComponent],
})
export class SelectRecipeModule {}
