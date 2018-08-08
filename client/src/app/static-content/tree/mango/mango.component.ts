import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mango',
  templateUrl: './mango.component.html',
  styleUrls: ['../tree.component.css']
})
export class MangoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
