import { Factory } from "./factory";
import { Recipe } from "./recipe.entity";

export interface Production {
  recipe: Recipe;
  factory: Factory;
}