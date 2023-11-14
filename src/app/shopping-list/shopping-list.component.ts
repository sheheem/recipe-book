import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredient[];

  constructor(private _shoppingService: ShoppingListService) {}

  ngOnInit(): void {
     this.Ingredients =  this._shoppingService.getShoppingList();
  }

 
}
