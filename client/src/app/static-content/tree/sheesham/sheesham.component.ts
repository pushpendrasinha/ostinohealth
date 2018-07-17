import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheesham',
  templateUrl: './sheesham.component.html',
  styleUrls: ['../tree.component.css']
})
export class SheeshamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
