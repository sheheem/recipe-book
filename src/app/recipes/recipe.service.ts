import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test recipe',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'This is a test recipe',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
    ),
  ];

  constructor() { }

  getRecipies() {
    return this.recipes.slice();
  }
}
