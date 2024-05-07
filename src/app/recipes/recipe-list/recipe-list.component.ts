import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Test Description',
      'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg'
    ),
    new Recipe(
      'Test',
      'Test Description',
      'https://www.allrecipes.com/thmb/NIBiRRdpD5FmBpaIE1HBvkUdeIY=/532x368/filters:no_upscale():max_bytes(150000):strip_icc():focal(2060x1373:2062x1375)/AR_RR_InstantPotBolognese_STILLSDSC07203-4x3-d29912d240184b409416d691e314284b.jpg'
    ),
  ];
}
