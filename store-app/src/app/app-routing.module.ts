import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { DetailsComponent } from './details/details.component'; 
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: ProductsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
