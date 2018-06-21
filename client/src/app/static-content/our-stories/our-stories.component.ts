import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-stories',
  templateUrl: './our-stories.component.html',
  styleUrls: ['./our-stories.component.css']
})
export class OurStoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function(event) {


      var acc = document.getElementsByClassName('accordion');
      var panel = document.getElementsByClassName('panel');

      for (var i = 0; i < acc.length; i++) {
          acc[i].addEventListener('click', function() {
          var setClasses = !this.classList.contains('active');
          setClass(acc, 'active', 'remove');
          setClass(panel, 'show', 'remove');

          if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
          }
        });
      }

      function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
        }
      }

    });
  }

}
