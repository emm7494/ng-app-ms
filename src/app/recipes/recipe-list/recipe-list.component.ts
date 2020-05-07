import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
    console.log('recipe-list: ', recipe);
  }
}
