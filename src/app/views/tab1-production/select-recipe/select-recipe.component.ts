import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { DataService } from "src/app/services/data.service";
import { Recipe } from "src/app/utils/interfaces";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-select-recipe",
  templateUrl: "./select-recipe.component.html",
  styleUrls: ["./select-recipe.component.scss"],
})
export class SelectRecipeComponent implements OnInit {
  recipes: Recipe[];
  showingRecipes: Recipe[];

  subscriptions: Subscription[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.recipes = this.dataService.recipes;
    this.searchChange(``);
    this.subscriptions.push(
      this.dataService.recipesListChange.subscribe(() => {
        this.searchChange(``);
      })
    );
  }

  async showRecipe(recipeId: string) {
    await this.router.navigate([`/tabs/tab1/select-recipe/show-recipe`], {
      queryParams: {
        index: recipeId,
      },
    });
  }

  async newRecipe() {
    await this.router.navigate([`/tabs/tab1/select-recipe/new-recipe`]);
  }

  async backClick() {
    await this.router.navigate([`/tabs/tab1`]);
  }

  searchChangeEvent(event: any) {
    this.searchChange(event.target.value);
  }

  searchChange(text: string) {
    if (text === ``) {
      this.showingRecipes = this.recipes;
    } else {
      this.showingRecipes = this.recipes.filter((wine) =>
        wine.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.showingRecipes = this.showingRecipes.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  }

  ngOnDestoy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}
