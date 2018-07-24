import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

   logo() {
    console.log("Developed by Pushpendra Sinha");
  }
  ngOnInit() {
    }
    menu() {
      const x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    }
  redirect() {
    this.router.navigateByUrl('/ecom/cart');
  }




}
