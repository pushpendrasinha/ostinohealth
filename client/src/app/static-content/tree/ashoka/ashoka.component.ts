import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ashoka',
  templateUrl: './ashoka.component.html',
  styleUrls: ['../tree.component.css']
})
export class AshokaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
