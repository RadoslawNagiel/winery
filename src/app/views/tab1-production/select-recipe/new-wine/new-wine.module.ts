import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NewWineComponent } from "./new-wine.component";
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
        component: NewWineComponent,
      },
    ]),
  ],
  declarations: [NewWineComponent],
  exports: [NewWineComponent],
})
export class NewWineModule {}
