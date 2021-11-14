import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NewWineComponent } from "./new-wine.component";
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
        component: NewWineComponent,
      },
    ]),
  ],
  declarations: [NewWineComponent],
  exports: [NewWineComponent],
})
export class NewWineModule {}
