import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
myorders: any;
  constructor(private remoteApiService: RemoteApiService) {
    this.myorders = [];
  }

  ngOnInit() {
    this.remoteApiService.myOrders().subscribe((result: any) => {
      this.myorders = result.orders;
    })
  }

}
