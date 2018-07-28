import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from "../services/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ecommerce: boolean;
  constructor(private router: Router, private location: Location, private authService: AuthService) {
    this.ecommerce = false;
    router.events.subscribe((val) => {
     var path = this.location.path();
     if(path.startsWith('/ecom')) {
       this.ecommerce = true;
     }
    });

  }
  ngOnInit() {

  }
}
