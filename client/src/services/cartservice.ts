import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject} from "rxjs/Subject";


@Injectable()
export class CartService {
 // private CartState: any ;
   cartSubject = new Subject<any>();
  Products :any;

  constructor(private http: HttpClient) {
    this.Products = [];
 // this.CartState = this.cartSubject.asObservable();
  }

  addProduct(product) {
    this.Products.push(product);
    this.cartSubject.next({loaded: true , products:  this.Products});
   // this.cartSubject.next({loaded: true, products:  this.Products});
    alert("product added ");
  }
  getProductObservable() {
    return this.cartSubject.asObservable();
  }

  removeProduct(id) {
    this.Products = this.Products.filter((_item) =>  _item.id !== id )
    this.cartSubject.next({loaded: false , products:  this.Products});
  }

}
