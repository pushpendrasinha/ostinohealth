import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Router} from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { CartService } from "../../../services/cartservice";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input()
  isEcommerce: boolean;
  isLoggedIn: boolean;
  loggedInsubscription: Subscription;
  userDetailsSubscription: Subscription;
  userdetails: any;
  numberOfItemsInCart: Subscription;
  numberOfItems: any;
  constructor(private router: Router, private authService: AuthService, private cartService: CartService) {
    this.numberOfItems = 0;
  }

  ngOnInit() {
    this.userdetails = {};
    if(localStorage.getItem('token')!=null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    this.loggedInsubscription =  this.authService.isLoggedIn.subscribe((value) => {

      this.isLoggedIn = value;
    })
    this.userDetailsSubscription = this.authService.userdetails.subscribe((value) => {
      //alert("user subscription called");
      this.userdetails = value;
    })

    this.numberOfItemsInCart = this.cartService.numberOfItems.subscribe((value) => {
      this.numberOfItems = value;
    })

    }
    menu() {
      const x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    }
  redirect() {
    this.router.navigateByUrl('/ecom/cart');
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/ecom/login');
  }
  ngOnDestroy() {
    this.loggedInsubscription.unsubscribe();
    this.userDetailsSubscription.unsubscribe();
    this.numberOfItemsInCart.unsubscribe();
  }

}
