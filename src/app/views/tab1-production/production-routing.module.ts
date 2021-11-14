import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProductionPage } from "./production.page";

const routes: Routes = [
  {
    path: ``,
    component: ProductionPage,
  },
  {
    path: `show-wine`,
    loadChildren: () =>
      import(`./show-wine/show-wine.module`).then((m) => m.ShowWineModule),
  },
  {
    path: `select-recipe`,
    loadChildren: () =>
      import(`./select-recipe/select-recipe.module`).then(
        (m) => m.SelectRecipeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionPageRoutingModule {}
