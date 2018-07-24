import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdetails: any;
  constructor(private remoteApiService: RemoteApiService) { }

  ngOnInit() {
    this.remoteApiService.getUser().subscribe((result: any) => {
      this.userdetails = result.user;
    }, (err) => {

    })
  }

}
