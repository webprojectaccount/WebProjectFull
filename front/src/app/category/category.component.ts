import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import {Category, Product} from '../models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  products:Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
      this.getCategory();
    }));
  }

  ngOnInit() {
    this.getProducts();
    this.getCategory();
  }
  // getProducts() {
  //   let id = this.route.snapshot.paramMap.get('id');
  //   id = id.substr(1);
  //   this.categoryService.getProductList(id)
  //     .subscribe(products => {
  //       this.products = products;
  //     });
  // }

  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }
  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
}
