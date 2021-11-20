import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-wines-list-element",
  templateUrl: "./wines-list-element.component.html",
  styleUrls: ["./wines-list-element.component.scss"],
})
export class WinesListElementComponent implements OnInit {
  @Input() wineId: string;
  @Input() wine: Wine;
  @Output() onWineSelect = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  elementClick() {
    this.onWineSelect.emit(this.wineId);
  }
}
