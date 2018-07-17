import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jamun',
  templateUrl: './jamun.component.html',
  styleUrls: ['../tree.component.css']
})
export class JamunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
