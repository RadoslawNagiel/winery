import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductionPage } from './production.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionPageRoutingModule {}
