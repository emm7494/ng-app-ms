import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipes/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // this.id = +params.id;
      // this.selectedRecipe = this.recipeService.getRecipe(this.id);
      this.selectedRecipe = this.recipeService.getRecipe(+params.id);
    });
  }
  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
