import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {RemoteApiService} from "./remoteapi.service";

@Injectable()
export class AuthService {
  isLoggedIn: Subject<boolean>;
  userdetails: Subject<any>;
  constructor(private router: Router, private remoteApiService: RemoteApiService) {
    this.isLoggedIn = new Subject<boolean>();
    this.userdetails = new Subject<any>();
  }

  setLoginStatus() {
    this.isLoggedIn.next(true);
  }

  getUserDetails() {
    this.remoteApiService.getUser().subscribe((result: any) => {
      if(result.success) {
        this.userdetails.next(result.user);
      }
    })
  }

}
