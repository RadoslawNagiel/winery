import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { WinesListComponent } from './wines-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [WinesListComponent],
  exports: [WinesListComponent],
})
export class WinesListModule {}
