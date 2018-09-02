import { Component, OnInit } from '@angular/core';
import { Dataservice } from '../../../services/dataservice';

@Component({
  selector: 'app-fortune-cookie',
  templateUrl: './fortune-cookie.component.html',
  styleUrls: ['./fortune-cookie.component.css']
})
export class FortuneCookieComponent implements OnInit {

  cookies: Array<string>;
  constructor(private dataService: Dataservice) { }

  ngOnInit() {
    this.cookies = this.dataService.getFortuneCookies();
    }
   newA() {
    const index = Math.floor(Math.random() * (199)); // remove 'var' keyword to use the global var
    document.getElementById('aDisplay').innerHTML = (this.cookies[index]);
  }

   imageSwap() {
     (<HTMLImageElement> document.getElementById('myImg')).src = 'https://s3.ap-south-1.amazonaws.com/ostinohealth/static/cookie-open.png';
  }

   change() {
     (<HTMLInputElement> document.getElementById('button')).value = 'Open Another One';
  }

  fun(){
  console.log('Developed By Pushpendra Sinha');
}

}
