import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    CommonModule, //so we can use *ngIf, for exemple (BrowserModule, that also contains *ngIf, must only be used once - in the AppModule)
    FormsModule
  ]
})
export class ShoppingListModule {}
