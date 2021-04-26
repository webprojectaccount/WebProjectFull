import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(public categoryService: CategoryService,
              public route: ActivatedRoute) {}
  numberOfLikes = 10;


  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    let id = this.route.snapshot.paramMap.get('id');
    id = id.substr(1);
    this.categoryService.getProductList(id)
      .subscribe(products => {
        this.products = products;
      });
  }


  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  sharetowhatsapp(product) {
    window.open(`whatsapp://send?text=http://localhost:4200/products/${product.id}`);
  }
  sharetotelegram(product) {
    window.open( `https://t.me/share/url?url=http://localhost:4200/products/${product.id}`);
  }
  likeButtonClick() {
    this.numberOfLikes++;
  }

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
