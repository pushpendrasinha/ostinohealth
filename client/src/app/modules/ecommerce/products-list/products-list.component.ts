import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { CartService } from "../../../../services/cartservice";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productList: Array<any>;
  constructor(private remoteApiService: RemoteApiService, private cartService: CartService) { }

  ngOnInit() {
    this.remoteApiService.getProductsList().subscribe((result: any) => {
    this.productList = result;
    }, (err) =>{

    })
  }
  addToCart(product) {
    alert("add to cart " + JSON.stringify(product, null, 2));
    this.cartService.addProduct(product);

  }

}
