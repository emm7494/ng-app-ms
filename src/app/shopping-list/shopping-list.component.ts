import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit(): void {}

  onShoppingListActionFired({ actionType, ingredient }) {
    switch (actionType) {
      case 'add':
        this.ingredients.push(ingredient);
        break;
      case 'delete':
        this.ingredients = this.ingredients.filter(
          ({ name }) => name !== ingredient.name
        );
        break;
    }
  }
}
