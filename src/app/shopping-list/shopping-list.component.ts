import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients:Ingredient[] = [
    new Ingredient('Hamburger', 1),
    new Ingredient('Squash', 1),
    new Ingredient('Pizza', 1),
  ];
}
