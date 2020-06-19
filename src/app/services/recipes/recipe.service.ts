import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeSelect = new EventEmitter<Recipe>();
  public currentRecipe: Recipe;

  private recipeList: Recipe[] = [
    new Recipe(
      'A Test Recipee',
      'We are simply testing meals!',
      'https://asset.slimmingworld.co.uk/content/media/11639/vegetable-biryani-iceland_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=640&height=640',
      [new Ingredient('Yam', 5), new Ingredient('Palm oil', 1)]
    ),
    new Recipe(
      'A Test Recipee',
      'We are simply testing meals!',
      'https://asset.slimmingworld.co.uk/content/media/11639/vegetable-biryani-iceland_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=640&height=640',
      [new Ingredient('Meat', 2), new Ingredient('Green pepper', 8)]
    ),
  ];
  constructor() {}

  get recipes() {
    return this.recipeList;
  }

  set selectedRecipe(recipe: Recipe) {
    this.currentRecipe = recipe;
    this.recipeSelect.emit(recipe);
  }
}
