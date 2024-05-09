import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Test Description',
      'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
    ),
    new Recipe(
      'Test 2',
      'Test Description 2 ',
      'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg',
      [new Ingredient('Tomatoes', 1), new Ingredient('Mushrooms', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
