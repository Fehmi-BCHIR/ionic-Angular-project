import { Component } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ionViewDidEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes);
  }
}
