import { Component } from '@angular/core';
import { WINES } from './const';

@Component({
  selector: 'app-production',
  templateUrl: 'production.page.html',
  styleUrls: ['production.page.scss'],
})
export class ProductionPage {
  wines = WINES;

  constructor() {}
}
