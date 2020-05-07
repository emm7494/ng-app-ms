import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingListActionFired = new EventEmitter<{
    actionType: string;
    ingredient: Ingredient;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAddClick(
    event: Event,
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ) {
    event.preventDefault();
    this.shoppingListActionFired.emit({
      actionType: 'add',
      ingredient: new Ingredient(nameInput.value, +amountInput.value),
    });
  }

  onDeleteClick(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListActionFired.emit({
      actionType: 'delete',
      ingredient: new Ingredient(nameInput.value, +amountInput.value),
    });
  }
}
