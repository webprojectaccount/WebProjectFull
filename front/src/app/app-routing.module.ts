import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {NavComponent } from './nav/nav.component';
import {AuthorComponent } from './author/author.component';



const routes: Routes = [
  {path: '', component: NavComponent},
  { path: 'category/:id/products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  {path: 'authors', component: AuthorComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
