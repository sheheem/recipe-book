import { Ingredient } from "../shared/ingedient.model";

export class ShoppingListService {

  Ingredients:Ingredient[] = [
    new Ingredient('Hamburger', 1),
    new Ingredient('Squash', 1),
    new Ingredient('Pizza', 1),
  ];


  constructor() { }

  getShoppingList() {
    return this.Ingredients;
  }

  onAddIngredient(ingredient: Ingredient) {
    this.Ingredients.push(ingredient);
  }
}
