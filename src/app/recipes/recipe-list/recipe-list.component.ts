import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[];

  constructor(private _recipeService: RecipeService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
      this.recipes = this._recipeService.getRecipies();
  }

  onAddNew() {
    this._router.navigate(['new'], {relativeTo: this._route})
  }
  
}
