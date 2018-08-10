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
  encRequest: any;
  accessCode:any;
  constructor(private remoteApiService: RemoteApiService,
              private  cartService: CartService,
              private alertHandler: AlertHandler) {
    this.cartItems = [];
    this.total = 0;
  }

  ngOnInit() {
    console.log("in cart component");
    this.encRequest ="7401b4b234bb932be57048b0a36c9f47c1ea1c206d250eb64361f1b3a8b2d2d5df0f13be73075dc4c4ba712c3e558aea132f118d2fafec29fe093710c2faa7d9cc943f759d3b5ed1cc1d1aee02bdbc5fe33b7c49c252b19109f37801f795b032669afdcb0b24443275f3f0adfc7c68f3fe587e61fb35098a8a5b1aa9b6312ed3eb7df7e6b53f6241b9a53ea48170c6cdac5d9925a1b14c08b2bc0592c0ff6ed50930fa2d81dbe45fda8a3a0dc27917c04dedd5798bfac16dbbe5f2f3697ce7312f2fa66b1b5d25f4d293175a45e2f609ce44a99bc8150f47c4237dfe5237139177cf2b3c502a05fd89f4961265409beb825385c113c3366e1474bca2ac7e53ae7499577c2bd37c6cc4c9b946f6640d68868079c59af4e9ffd03abede2f09ace017691863c6010e3c77dcde0b68e6e6df2957fdd89e129e77e22ca521592b8fa240f48afb737385556b7fcd4857a4c3f7cd37966336e8ccdb0c166ded4362da35b15fa2a66a3bbfcfcd4e2fc626582228289b1f485caf19a51c9489f758ceb6d1b2642f8beddfa2660390ac0474c1f525b62e03ace7947a3e83dd6a31236d82186a73174a2a92117e11e03853638a250aec1b136ac03169c0c06e85e29df3611ec17b6d230d1730b1b5d1c36862aa0532859f96bfdf4377c52633a72ddbb052a1d8c33b6154e8ba167e47c651b1a23f50c4f91b834eb2f371ab68a8777f6177a15e901c61efe1eb066ca129aa3d9516d86ff7de836805b19fcf3df5aa7af59467d1fb904698e8525b701cd4a4862e97a7974ebb30e3f2baf6060fbe12d5aecb46925fb703a64a9146a7f97cbfce423f9f917746018f888d95751fd037b35352b481bcb8c5063f6262ca706b5a500e242ece22240dbc831ed68c72a94bdc822c8d5e3f88761fb53ad1b802231cce19ed6dda29c98392a13eb360ce0428fd80eea1e296ca59d349e215bce54391b897e5fbf46e4378a12687dc79a963aeb1b1181a07364873af55124a1b2bf0f253242af6af6e39e1872ad30abf0095a4d571f756f0913a7bcc88d5be7c628e44931305dc9c43a169039505cdf729b720533a0e9c4965f118f4afee590ab22271deddc2de";
    this.accessCode = "AVAZ78FF42AH48ZAHA";
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
    this.alertHandler.showLoading();
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
    this.subscription.unsubscribe();
  }

  changeQuantity(item) {
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
window.location.href = result;
    })
  }

  initTransaction() {
    this.remoteApiService.initTransaction(this.encRequest, this.accessCode).subscribe((result)=> {

    })
  }

}
