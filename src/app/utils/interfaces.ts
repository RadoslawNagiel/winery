export interface Wine {
  name: string;
  createDate: number;
  capacity: number;
  power: number;
  sweetness: Sweetness;
  recipe: recipe;
  stagesDone: boolean[];
}

export interface Ingredient {
  name: string;
  weight: number;
}

export enum Sweetness {
  Wytrawne,
  Półwytrawne,
  Półsłodkie,
  Słodkie,
}

export interface recipe {
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
