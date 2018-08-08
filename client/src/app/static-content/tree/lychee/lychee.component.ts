import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lychee',
  templateUrl: './lychee.component.html',
  styleUrls: ['../tree.component.css']
})
export class LycheeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
