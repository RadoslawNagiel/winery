import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Recipe } from "src/app/utils/interfaces";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-recipe-container",
  templateUrl: "./recipe-container.component.html",
  styleUrls: ["./recipe-container.component.scss"],
})
export class RecipeContainerComponent implements OnInit {
  @ViewChild(`divToAnimate`) divToAnimate!: ElementRef<HTMLDivElement>;
  @Input() recipe!: Recipe;
  @Input() index!: number;

  @Output() onWineSelect = new EventEmitter<number>();

  showMore = false;

  constructor(private readonly router: Router) {}

  async ngOnInit() {}

  showMoreButton() {
    this.showMore = !this.showMore;
    if (this.showMore) {
      this.divToAnimate.nativeElement.style.height = `${this.divToAnimate.nativeElement.scrollHeight}px`;
      return;
    }

    this.divToAnimate.nativeElement.style.height = `75px`;
  }

  select() {
    this.onWineSelect.emit(this.index);
  }
}
