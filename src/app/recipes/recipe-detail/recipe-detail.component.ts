
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingedient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
      this._route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this._recipeService.getRecipie(this.id);
      })
  }

  addIngredients(Ingredients: Ingredient[]) {
    this._recipeService.addIngredients(Ingredients)
  }

}
