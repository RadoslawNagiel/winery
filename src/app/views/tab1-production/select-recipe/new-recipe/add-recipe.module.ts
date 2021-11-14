import { AddRecipeComponent } from "./add-recipe.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: ``,
        component: AddRecipeComponent,
      },
    ]),
  ],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent],
})
export class AddRecipeModule {}
