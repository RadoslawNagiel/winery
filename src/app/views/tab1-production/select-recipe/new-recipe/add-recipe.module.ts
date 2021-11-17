import { AddRecipeComponent } from "./add-recipe.component";
import { AddRecipePreviewModule } from "./add-recipe-preview/add-recipe-preview.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TextInfoModule } from "src/app/shared/text-info/text-info.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextInfoModule,
    AddRecipePreviewModule,
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
