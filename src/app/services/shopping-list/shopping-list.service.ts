import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredientList: Ingredient[] = [];

  constructor() {}

  get ingredients() {
    return this.ingredientList;
  }
  set action({ actionType, ingredient }) {
    switch (actionType) {
      case 'add':
        this.ingredientList.push(ingredient);
        break;
      case 'delete':
        const temp = [...this.ingredientList].filter(
          ({ name }) => name !== ingredient.name
        );
        this.ingredientList.length = 0;
        temp.forEach((item) => this.ingredientList.push(item));
        break;
    }
  }
}
