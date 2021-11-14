import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ProductionPage } from "./production.page";
import { ProductionPageRoutingModule } from "./production-routing.module";
import { SelectRecipeModule } from "./select-recipe/select-recipe.module";
import { ShowWineModule } from "./show-wine/show-wine.module";
import { WinesListModule } from "./wines-list/wines-list.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductionPageRoutingModule,
    WinesListModule,
    ShowWineModule,
    SelectRecipeModule,
  ],
  declarations: [ProductionPage],
})
export class ProductionPageModule {}
