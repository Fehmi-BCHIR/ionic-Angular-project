import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailPage } from './recipe-detail/recipe-detail.page';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: 'recipe-detail',
    component: RecipeDetailPage,
  },
  {
    path: 'recipe-item',
    component: RecipeItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
