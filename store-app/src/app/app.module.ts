import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    DetailsComponent,
    ShoppingListComponent,
    ProductsContainerComponent,
    ShoppingItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
