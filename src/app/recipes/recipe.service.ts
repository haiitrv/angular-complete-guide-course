import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../app/shopping-list/store/shopping-list.action';
import { AppState } from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Test',
  //     'Test Description',
  //     'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Test 2',
  //     'Test Description 2 ',
  //     'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg',
  //     [new Ingredient('Tomatoes', 1), new Ingredient('Mushrooms', 20)]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(
    private slService: ShoppingListService,
    private store: Store<AppState>
  ) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
