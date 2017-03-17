import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
//import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
    //{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    //{ path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
