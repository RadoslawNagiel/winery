import { AddRecipePreviewComponent } from "./add-recipe-preview.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [AddRecipePreviewComponent],
  exports: [AddRecipePreviewComponent],
})
export class AddRecipePreviewModule {}
