import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tamarind',
  templateUrl: './tamarind.component.html',
  styleUrls: ['../tree.component.css']
})
export class TamarindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
