import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peepal',
  templateUrl: './peepal.component.html',
  styleUrls: ['../tree.component.css']
})
export class PeepalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
