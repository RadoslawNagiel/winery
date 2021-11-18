import { RouterModule, Routes } from "@angular/router";

import { GuidePageComponent } from "./guide-page/guide-page.component";
import { GuidesComponent } from "./guides.page";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: GuidesComponent,
  },
  {
    path: `:slug`,
    component: GuidePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {}
