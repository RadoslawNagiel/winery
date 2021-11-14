import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-show-wine",
  templateUrl: "./show-wine.component.html",
  styleUrls: ["./show-wine.component.scss"],
})
export class ShowWineComponent implements OnInit {
  @Input() wineIndex: number;
  @Output() onBackClick = new EventEmitter();
  wine: Wine;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.wine = this.dataService.inProgressWines[this.wineIndex];
  }

  backClick() {
    this.onBackClick.emit();
  }
}
