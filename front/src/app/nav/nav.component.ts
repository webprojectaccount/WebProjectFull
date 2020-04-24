import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {categories} from '../categories';
import {Category} from '../models';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  categories: Category[]=[];
  constructor(public categoryService: CategoryService){}
  // ngOnInit(): void {
  //   this.getCategories();
  // }
  ngOnInit(): void {
    this.getCategories();
  }

  // getCategories() {
  //   this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  // }
  getCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories
      });
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe(res => {
      // this.categories = this.categories.filter(c => c.id != id);
      // this.getCategoryList();
    });
  }

}
