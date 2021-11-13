import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-show-wine",
  templateUrl: "./show-wine.component.html",
  styleUrls: ["./show-wine.component.scss"],
})
export class ShowWineComponent implements OnInit {
  @Input() wine: Wine;
  @Output() onBackClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  backClick() {
    this.onBackClick.emit();
  }
}
