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
  done: boolean;
  numberOfBottles: number;
  stagesDone: boolean[];
}

export interface Ingredient {
  name: string;
  value: number;
  unit: Units;
}

export interface Recipe {
  id: string;
  name: string;
  author: string;
  ingredients: Ingredient[];
  productStages: ProductStage[];
}

export interface ProductStage {
  name: ProductionStage;
  description: string;
  date: number;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
}

export enum ProductionStage {
  Preparation = `Przygotowanie moszczu`,
  Straining = `Odcedzanie owoców`,
  Drainage = `Zlewanie znad osadu`,
  StopFermentation = `Przerwanie fermentacji`,
  Bottling = `Butelkowanie`,
}

export enum Sweetness {
  Wytrawne,
  Półwytrawne,
  Półsłodkie,
  Słodkie,
}

export enum Units {
  gramy = `g.`,
  litry = `l.`,
  sztuki = `szt.`,
}
