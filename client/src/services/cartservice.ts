import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject} from "rxjs/Subject";


@Injectable()
export class CartService {
 // private CartState: any ;
   cartItems: Subject<any>;
  Products :any;
  numberOfItems: Subject<Number>;

  constructor(private http: HttpClient) {
    this.Products = [];
    this.cartItems = new Subject<any>();
    this.numberOfItems = new Subject<Number>();
  }

  addProduct(product) {
    this.Products.unshift(product);
    this.cartItems.next(this.Products);
  }


  removeProduct(id) {
    this.Products = this.Products.filter((_item) =>  _item.id !== id )
    this.cartItems.next(this.Products);
  }

}
