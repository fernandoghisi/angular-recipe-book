import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>(); //TEMP
  recipe = new Recipe('Dummy', 'Dummy', 'https://s-media-cache-ak0.pinimg.com/736x/41/92/77/419277e094a179fc9f20ecf25b9bbed8.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
