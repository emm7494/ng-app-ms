import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.selectedRecipe = this.recipeService.currentRecipe;
    this.recipeService.recipeSelect.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe)
  }
}
