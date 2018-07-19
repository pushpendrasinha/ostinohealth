import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
     // console.log("url is "  +  (event).url);
    })

  }
}
