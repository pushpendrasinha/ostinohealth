import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";

@Component({
  selector: 'app-home-ecom',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userdetails: any;
  constructor(private remoteApiService: RemoteApiService) {
    this.userdetails = {};
  }

  ngOnInit() {
    this.remoteApiService.getUser().subscribe((result: any) => {
    this.userdetails = result.user;
    }, (err) => {

    })
  }

}
