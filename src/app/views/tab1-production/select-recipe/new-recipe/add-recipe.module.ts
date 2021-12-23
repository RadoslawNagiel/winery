import { AddRecipeComponent } from "./add-recipe.component";
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
    RouterModule.forChild([
      {
        path: ``,
        component: AddRecipeComponent,
      },
      {
        path: `preview`,
        loadChildren: () =>
          import(`./add-recipe-preview/add-recipe-preview.module`).then(
            (m) => m.AddRecipePreviewModule
          ),
      },
    ]),
  ],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent],
})
export class AddRecipeModule {}
