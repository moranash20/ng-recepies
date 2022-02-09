import { ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 15),
  ];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    //   for(let ingredient of ingredients){
    //       this.addIngredient(ingredient)
    //   }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
