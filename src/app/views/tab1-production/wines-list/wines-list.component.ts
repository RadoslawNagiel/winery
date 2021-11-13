import { Component, Input, OnInit } from '@angular/core';

import { Wine } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-wines-list',
  templateUrl: './wines-list.component.html',
  styleUrls: ['./wines-list.component.scss'],
})
export class WinesListComponent implements OnInit {
  @Input() wine: Wine;

  constructor() {}

  ngOnInit() {}
}
