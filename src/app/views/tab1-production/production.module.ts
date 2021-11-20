import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ProductionPage } from "./production.page";
import { ProductionPageRoutingModule } from "./production-routing.module";
import { ProductionstElementModule } from "./production-list-element/production-list-element.module";
import { SelectRecipeModule } from "./select-recipe/select-recipe.module";
import { ShowWineInProgresModule } from "./show-wine-in-progres/show-wine-in-progres.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductionPageRoutingModule,
    ProductionstElementModule,
    ShowWineInProgresModule,
    SelectRecipeModule,
  ],
  declarations: [ProductionPage],
})
export class ProductionPageModule {}
