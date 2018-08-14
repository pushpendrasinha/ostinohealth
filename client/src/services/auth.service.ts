import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {RemoteApiService} from "./remoteapi.service";

@Injectable()
export class AuthService implements CanActivate {
  isLoggedIn: Subject<boolean>;
  userdetails: Subject<any>;
  constructor(private router: Router, private remoteApiService: RemoteApiService) {
    this.isLoggedIn = new Subject<boolean>();
    this.userdetails = new Subject<any>();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token') != null) {
      if(state.url == '/login') {
        this.router.navigateByUrl('/console');
      }
      return true;
    } else {
      if(state.url.includes('/login')) {
        return true;
      }
      this.router.navigate(['/ecom/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
  setLoginStatus() {
    this.isLoggedIn.next(true);
  }
  isUserLoggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getUserDetails() {
    this.remoteApiService.getUser().subscribe((result: any) => {
      if(result.success) {
        this.userdetails.next(result.user);
      }
    })
  }

}
