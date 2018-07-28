import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { Router } from '@angular/router';
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-home-ecom',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userdetails: any;
  constructor(private remoteApiService: RemoteApiService, private router: Router, private authService: AuthService) {
    this.userdetails = {};
  }

  ngOnInit() {
    /*this.remoteApiService.getUser().subscribe((result: any) => {
    this.userdetails = result.user;
    }, (err) => {

    })*/
    this.authService.userdetails.subscribe((value) => {
      this.userdetails = value;
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/ecom/login');
  }

}
