import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Recipe, Sweetness, Wine } from "src/app/utils/interfaces";

import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/toast-service.service";

@Component({
  selector: "app-add-recipe-preview",
  templateUrl: "./add-recipe-preview.component.html",
  styleUrls: ["./add-recipe-preview.component.scss"],
})
export class AddRecipePreviewComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() onBackClick = new EventEmitter();

  wine: Wine = {
    name: ``,
    createDate: Date.now(),
    capacity: 10,
    power: 10,
    yeast: `Drożdże winiarskie`,
    yeastTolerance: 12,
    sweetness: Sweetness.Półwytrawne,
    recipe: null,
    stagesDone: [],
  };

  constructor(
    private readonly toastService: ToastService,
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.wine.name = this.recipe.name;
    this.wine.recipe = this.recipe;
  }

  addRecipe() {
    this.dataService.addRecipe(this.recipe);
    this.toastService.presentToastSuccess(`Dodano przepis`);
    void this.router.navigate([`/tabs/tab1/select-recipe`]);
  }

  backClick() {
    this.onBackClick.emit();
  }
}
