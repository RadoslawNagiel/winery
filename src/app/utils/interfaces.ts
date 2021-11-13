export interface Wine {
  name: string;
  createDate: number;
  capacity: number;
  productStages: ProductStage[];
  ingredients: Ingredient[];
}

export interface ProductStage {
  name: string;
  done: boolean;
  date: number;
}

export interface Ingredient {
  name: string;
  weight: number;
}
