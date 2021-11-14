export interface Wine {
  name: string;
  createDate: number;
  capacity: number;
  power: number;
  sweetness: Sweetness;
  recipe: Recipe;
  stagesDone: boolean[];
}

export interface Ingredient {
  name: string;
  value: number;
  unit: string;
}

export enum Sweetness {
  Wytrawne,
  Półwytrawne,
  Półsłodkie,
  Słodkie,
}

export interface Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  productStages: ProductStage[];
}

export interface ProductStage {
  name: string;
  description: string;
  date: number;
}
