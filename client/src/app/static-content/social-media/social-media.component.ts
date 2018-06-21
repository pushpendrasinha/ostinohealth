import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadTemplateScript();
  }

  loadTemplateScript() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}
