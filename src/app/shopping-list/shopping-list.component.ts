import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  public ingredientList: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientList = this.shoppingListService.ingredients;
    this.shoppingListService.ingredientListChange.subscribe(
      (ingredientList) => {
        this.ingredientList = ingredientList;
      }
    );
  }
}
