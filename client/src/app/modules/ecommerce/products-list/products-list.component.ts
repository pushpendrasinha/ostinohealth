import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { AuthService } from "../../../../services/auth.service";
import { AlertHandler } from "../../../../services/alert-handler";
import { Router } from "@angular/router";
import {CartService} from "../../../../services/cartservice";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productList: Array<any>;
isCollapsed : boolean = false;



  constructor(private remoteApiService: RemoteApiService,
              private authService: AuthService,
              private alertHandler: AlertHandler,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.remoteApiService.getProductsList().subscribe((result: any) => {
    this.productList = result;
    }, (err) =>{

    })
  }

  enlarge(src) {
    //alert("src is " + src);
    document.getElementById('enlarge').setAttribute('src', src);
    document.getElementById('myModal').style.display='block';

  }
  addToCart(product) {
   // alert(JSON.stringify(product, null, 2));
if(this.authService.isUserLoggedIn()) {
  this.remoteApiService.addProduct(product._id).subscribe((result: any)=> {
    if(result.success) {
     // alert("added to cart");
     // this.alertHandler.SuccessAlert("Added to Cart");
      this.alertHandler.SuccessAlert(result.msg);
      this.cartService.numberOfItems.next(result.totalItems);
    } else {
      alert("error occured " + result.msg);
    }
  })
} else {
  var options = {
    title: 'Login Required',
    type: "info",
    confirmButtonText: "Yes, Login",
    text: "Login required to add product to cart"
  }
this.alertHandler.confirmationAlert(options).then((result) => {
  if(result.value) {
    this.router.navigate(['ecom/login'], {queryParams: { returnUrl: '/ecom/products' }});
  }
})
}
  }



  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
