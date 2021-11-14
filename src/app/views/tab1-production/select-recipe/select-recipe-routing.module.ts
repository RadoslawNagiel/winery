import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { SelectRecipeComponent } from "./select-recipe.component";

const routes: Routes = [
  {
    path: ``,
    component: SelectRecipeComponent,
  },
  {
    path: `new-recipe`,
    loadChildren: () =>
      import(`./new-recipe/add-recipe.module`).then((m) => m.AddRecipeModule),
  },

  {
    path: `new-wine`,
    loadChildren: () =>
      import(`./new-wine/new-wine.module`).then((m) => m.NewWineModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRecipeRoutingModule {}
