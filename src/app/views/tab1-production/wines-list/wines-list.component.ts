import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Wine } from "src/app/utils/interfaces";

@Component({
  selector: "app-wines-list",
  templateUrl: "./wines-list.component.html",
  styleUrls: ["./wines-list.component.scss"],
})
export class WinesListComponent implements OnInit {
  @Input() wineIndex: number;
  @Output() onWineSelect = new EventEmitter<number>();
  wine: Wine;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.wine = this.dataService.inProgressWines[this.wineIndex];
  }

  elementClick() {
    this.onWineSelect.emit(this.wineIndex);
  }
}
