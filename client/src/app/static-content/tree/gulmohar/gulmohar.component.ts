import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gulmohar',
  templateUrl: './gulmohar.component.html',
  styleUrls: ['../tree.component.css']
})
export class GulmoharComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
