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
  @Input() recipe!: Recipe;

  @Output() onWineSelect = new EventEmitter<string>();

  constructor(
    private readonly dataService: DataService,
    private readonly toastService: ToastService
  ) {}

  async ngOnInit() {}

  select() {
    this.onWineSelect.emit(this.recipe.id);
  }

  async deleteRecipe(event: any) {
    event.stopPropagation();
    const result = await this.toastService.presentToastWithOptions(
      `Czy na pewno chcesz usunąć ten przepis?`,
      `Usuń`
    );
    if (result) {
      this.confirmDelete();
    }
  }

  confirmDelete() {
    this.dataService.deleteRecipe(this.recipe.id);
  }
}
