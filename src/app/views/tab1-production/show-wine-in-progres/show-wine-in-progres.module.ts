import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShowWineInProgresComponent } from "./show-wine-in-progres.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: ``,
        component: ShowWineInProgresComponent,
      },
    ]),
  ],
  declarations: [ShowWineInProgresComponent],
  exports: [ShowWineInProgresComponent],
})
export class ShowWineInProgresModule {}
