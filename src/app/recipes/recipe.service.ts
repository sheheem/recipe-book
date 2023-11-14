import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Burger',
      'This is a test recipe',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient( 'Buns', 2)
      ]
    ),
    new Recipe(
      'French Fries',
      'This is a test recipe',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [
        new Ingredient('Potato', 1)
      ]
    ),
  ];

  constructor(private _shoppingService: ShoppingListService) { }

  getRecipies() {
    return this.recipes.slice();
  }

  addIngredients(ingredient: Ingredient[]) {
    this._shoppingService.addingIngredient(ingredient);
  }
}
