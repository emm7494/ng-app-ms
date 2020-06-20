import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredientList: Ingredient[] = [];
  public ingredientListChange = new EventEmitter<Ingredient[]>();

  constructor() {}

  get ingredients() {
    return this.ingredientList;
  }
  action({ actionType, ingredient }) {
    switch (actionType) {
      case 'add':
        this.ingredientList.push(ingredient);
        this.ingredientListChange.emit(this.ingredientList);
        break;
      case 'delete':
        this.ingredientList = this.ingredientList.filter(
          ({ name }) => name !== ingredient.name
        );
        this.ingredientListChange.emit(this.ingredientList);
        break;
    }
  }
}
