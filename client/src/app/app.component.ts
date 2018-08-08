import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from "../services/auth.service";
import {Subscription} from "rxjs/Subscription";
import { AlertHandler } from "../services/alert-handler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ecommerce: boolean;
  showLoader: boolean;
  loadingSubscription: Subscription;
  constructor(private router: Router, private location: Location, private authService: AuthService, private alertHandler: AlertHandler) {
    this.ecommerce = false;
    this.showLoader = false;
    router.events.subscribe((val) => {
     var path = this.location.path();
     if(path.startsWith('/ecom')) {
       this.ecommerce = true;
     }
    });

  }
  ngOnInit() {
this.loadingSubscription = this.alertHandler.loader.subscribe((loading) =>{
  this.showLoader = loading;
    })
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
