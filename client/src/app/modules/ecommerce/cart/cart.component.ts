import { Component, OnInit } from '@angular/core';
import { Subscription} from "rxjs/Subscription";
import { CartService } from "../../../../services/cartservice";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private subscription : Subscription;
  cartItems: any;
  constructor(private _cartService: CartService) {
    this.cartItems = [];
  }

  ngOnInit() {
    console.log("in cart component");
    this.subscription = this._cartService.cartItems
      .subscribe((products) => {
        alert("in cart subscription ");
        this.cartItems = products;
        console.log("cartItems are "  + JSON.stringify(this.cartItems, null, 2));
      });
   // this._cartService.cartSubject.next("bye");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
