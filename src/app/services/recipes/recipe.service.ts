import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipeList: Recipe[] = [
    new Recipe(
      'A Test Recipee',
      'We are simply testing meals!',
      'https://asset.slimmingworld.co.uk/content/media/11639/vegetable-biryani-iceland_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=640&height=640'
    ),
    new Recipe(
      'A Test Recipee',
      'We are simply testing meals!',
      'https://asset.slimmingworld.co.uk/content/media/11639/vegetable-biryani-iceland_sw_recipe.jpg?v1=JGXiore20qg9NNIj0tmc3TKfKw-jr0s127JqqpCA2x7sMviNgcAYh1epuS_Lqxebn9V_qusKHfwbF7MOUrAPptzBhXIUL1Xnq2Mmdvx4fOk&width=640&height=640'
    ),
  ];
  constructor() {}

  get recipes() {
    return this.recipeList;
  }
}
