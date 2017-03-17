import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";

import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Tomato', 1),
      new Ingredient('Lettuce', 2),
      new Ingredient('Arugula', 1),
    ])
  ];

  constructor(private http: Http) {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe, newRecipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-4b94e.firebaseio.com/recipes.json', body, {headers: headers}); //PUT, on Firebase, overrides all the data (POST append the data)
  }

  fetchData() {
    return this.http.get('https://recipebook-4b94e.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}
