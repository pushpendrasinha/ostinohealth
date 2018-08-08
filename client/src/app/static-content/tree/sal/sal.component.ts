import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sal',
  templateUrl: './sal.component.html',
  styleUrls: ['../tree.component.css']
})
export class SalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
