import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShowRecipeComponent } from "./show-recipe.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: ``,
        component: ShowRecipeComponent,
      },
    ]),
  ],
  declarations: [ShowRecipeComponent],
  exports: [ShowRecipeComponent],
})
export class ShowRecipeModule {}
