import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['../tree.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // window.onscroll = function() {this.scrollFunction()};
  }


   scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
   topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
