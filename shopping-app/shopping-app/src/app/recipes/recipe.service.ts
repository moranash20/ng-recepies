import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service.service';
import { Recipe } from './recipe.modle';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel!',
      //'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-600w-370298699.jpg',
      'https://img.mako.co.il/2012/06/18/shutterstock_51423853_c.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'what else you need to sat',
      'https://img.mishlohim.co.il/mishlohim/articles/355/hagadir.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public getRecipes() {
    return this.recipes.slice();
  }

  public addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
