import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-wines-list",
  templateUrl: "./wines-list.component.html",
  styleUrls: ["./wines-list.component.scss"],
})
export class WinesListComponent implements OnInit {
  @Input() wine: Wine;
  @Output() onWineSelect = new EventEmitter<Wine>();

  constructor() {}

  ngOnInit() {}

  elementClick() {
    this.onWineSelect.emit(this.wine);
  }
}
