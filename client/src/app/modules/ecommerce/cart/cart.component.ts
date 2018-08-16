import { Component, OnInit } from '@angular/core';
import { Subscription} from "rxjs/Subscription";
import { CartService } from "../../../../services/cartservice";
import { RemoteApiService } from "../../../../services/remoteapi.service";
import {AlertHandler} from "../../../../services/alert-handler";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private subscription : Subscription;
  cartItems: any;
  total: Number;

  accessCode:any;
  constructor(private remoteApiService: RemoteApiService,
              private  cartService: CartService,
              private alertHandler: AlertHandler) {
    this.cartItems = [];
    this.total = 0;
  }

  ngOnInit() {
    console.log("in cart component");
    this.remoteApiService.viewCart().subscribe((result: any) => {
if(result.success) {
  this.cartItems = result.items;
  this.total = result.total;
  this.cartService.numberOfItems.next(result.totalItems);
}
    }, (err)=> {
      alert("error");
    })
  }
  remove(productId) {
   // alert(productId);
    this.remoteApiService.removeProduct(productId).subscribe((result: any) => {
      if(result.success) {
        this.cartItems = result.items;
        this.total = result.total;
        this.cartService.numberOfItems.next(result.totalItems);
        }
    })
  }
  update(item, quantity) {
    //this.alertHandler.showLoading();
    if(quantity == -1) {
      if(item.quantity > 1) {
        item.quantity = item.quantity + quantity;
        this.changeQuantity(item);
      }
    } else {
      item.quantity = item.quantity + quantity;
      this.changeQuantity(item);
    }


  }
  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

  changeQuantity(item) {
    this.alertHandler.showLoading();
    this.remoteApiService.changeQuantity(item._id, item.quantity).subscribe((result: any) => {
      this.alertHandler.hideLoading();
      if(result.success) {
        this.cartItems = result.items;
        this.total = result.total;
        this.cartService.numberOfItems.next(result.totalItems);
      }
    })
  }

  checkout() {
    this.remoteApiService.checkout().subscribe((result: any)=> {
     // alert(JSON.stringify(result, null, 2));
window.location.href = result.url;
    })
  }

  /*initTransaction() {
    this.remoteApiService.initTransaction(this.encRequest, this.accessCode).subscribe((result)=> {

    })
  }*/

}
