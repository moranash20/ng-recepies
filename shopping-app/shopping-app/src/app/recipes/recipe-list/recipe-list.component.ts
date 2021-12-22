import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modle';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'this is a simply a test',
      'https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-600w-370298699.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
