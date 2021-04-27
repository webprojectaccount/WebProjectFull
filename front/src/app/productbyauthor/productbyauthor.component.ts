import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service'; 
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models';

@Component({
  selector: 'app-productbyauthor',
  templateUrl: './productbyauthor.component.html',
  styleUrls: ['./productbyauthor.component.css']
})
export class ProductbyauthorComponent implements OnInit {
  products:Product[]=[];

  constructor(public categoryService: CategoryService,public route:ActivatedRoute) {}


  ngOnInit():void {
    this.getProductbyAuthors();
  }

  getProductbyAuthors() {
    let id = this.route.snapshot.paramMap.get('id');
    id = id.substr(1);
    this.categoryService.getProductbyAuthor(id)
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
