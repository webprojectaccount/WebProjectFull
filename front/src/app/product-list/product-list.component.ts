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
  products:Product[]=[];

  constructor(public categoryService: CategoryService,public route:ActivatedRoute) {}


  ngOnInit():void {
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
  share(product) {
     const url: string = window.location.href + '/' + product.id;
      window.alert(`The product ${ product.name } has been shared!`);
      window.open(`https://api.whatsapp.com/send?phone=77075145613&text=Look+at+this+product+${ product.name }+here+${ product.link }`);
    }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/