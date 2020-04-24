import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import {ProductService} from '../product.service';
import { OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {Category,Product} from '../models';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


export class ProductDetailComponent {
  products:Product;
  product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private cartService: CartService,
      private location: Location,
      private categoryService:CategoryService
    ) { }
    ngOnInit() {
        this.getProduct();
    
    }
    getProduct() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.categoryService.getProduct(id).subscribe(product => this.product = product);
    }
    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  

// share(product:Product):void {
//      window.alert(`The ${product.name} has been shared!`);

//   }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  goBack(): void {
    this.location.back();
  }
}
