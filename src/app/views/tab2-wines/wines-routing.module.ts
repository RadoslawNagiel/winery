import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { WinesPageComponent } from "./wines.page";

const routes: Routes = [
  {
    path: "",
    component: WinesPageComponent,
  },
  {
    path: `show-wine`,
    loadChildren: () =>
      import(`./show-wine/show-wine.module`).then((m) => m.ShowWineModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
