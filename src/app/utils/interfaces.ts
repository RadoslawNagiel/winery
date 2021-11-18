export interface Wine {
  id: string;
  name: string;
  createDate: number;
  capacity: number;
  power: number;
  yeast: string;
  yeastTolerance: number;
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
  id: string;
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

export interface Guide {
  slug: string;
  title: string;
  description: string;
}
