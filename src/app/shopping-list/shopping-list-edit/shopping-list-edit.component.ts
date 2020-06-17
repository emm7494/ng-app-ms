import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddClick(
    event: Event,
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ) {
    event.preventDefault();
    this.shoppingListService.action = {
      actionType: 'add',
      ingredient: new Ingredient(nameInput.value, +amountInput.value),
    };
  }

  onDeleteClick(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListService.action = {
      actionType: 'delete',
      ingredient: new Ingredient(nameInput.value, +amountInput.value),
    };
  }

  onClearClick(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    nameInput.value = '';
    amountInput.value = '';
  }
}
