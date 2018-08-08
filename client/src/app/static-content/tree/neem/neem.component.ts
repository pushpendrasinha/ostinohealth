import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neem',
  templateUrl: './neem.component.html',
  styleUrls: ['../tree.component.css']
})
export class NeemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
