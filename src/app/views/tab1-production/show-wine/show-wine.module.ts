import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShowWineComponent } from "./show-wine.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: ``,
        component: ShowWineComponent,
      },
    ]),
  ],
  declarations: [ShowWineComponent],
  exports: [ShowWineComponent],
})
export class ShowWineModule {}
