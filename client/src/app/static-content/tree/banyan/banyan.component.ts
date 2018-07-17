import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banyan',
  templateUrl: './banyan.component.html',
  styleUrls: ['../tree.component.css']
})
export class BanyanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
