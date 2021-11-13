import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductionPage } from './production.page';
import { ProductionPageRoutingModule } from './production-routing.module';
import { WinesListModule } from './wines-list/wines-list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProductionPageRoutingModule,
    WinesListModule,
  ],
  declarations: [ProductionPage],
})
export class ProductionPageModule {}
