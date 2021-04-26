import { Component, OnInit } from '@angular/core';
import { Authors } from '../models';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: Authors [] = [];
  constructor(public categoryService: CategoryService) {}
  // ngOnInit(): void {
  //   this.getCategories();
  // }
  ngOnInit(): void {
    this.getAuthors();
  }

  // getCategories() {
  //   this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  // }
  getAuthors() {
    this.categoryService.getAuthors()
      .subscribe(authors => {
        this.authors = authors;
      });
  }


}
