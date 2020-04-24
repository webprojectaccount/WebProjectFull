import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { categories } from './categories';
import {Category,Product,Authors, LoginResponse} from "./models";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_URL = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/categories/${id}`);
  }
  getProductList(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/categories/${id}/products`);
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories`);
  }
  deleteCategory(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/categories/${id}`);
  }
  getAuthors(): Observable<Authors[]>{
    return this.http.get<Authors[]>(`${this.BASE_URL}/authors`);
  }
  getProductbyAuthor(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/authors/${id}/products`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/login/`, {
      username,
      password
    })
  }
}