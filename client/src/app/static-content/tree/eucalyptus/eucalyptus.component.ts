import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eucalyptus',
  templateUrl: './eucalyptus.component.html',
  styleUrls: ['../tree.component.css']
})
export class EucalyptusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
