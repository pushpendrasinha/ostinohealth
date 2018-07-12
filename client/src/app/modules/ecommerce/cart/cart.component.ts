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
    this.subscription = this._cartService.getProductObservable()
      .subscribe((state) => {
        alert("in subscription ");
        this.cartItems = state.products;
        console.log("cartItems are "  + JSON.stringify(this.cartItems, null, 2));
      });
   // this._cartService.cartSubject.next("bye");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
