import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../services/remoteapi.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AlertHandler } from "../../../services/alert-handler";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  FeedbackForm: FormGroup;
  showLoader: boolean;

  constructor(private remoteApiService: RemoteApiService, private formBuilder: FormBuilder, private alertHandler: AlertHandler) {
    this.showLoader = false;
  }

  ngOnInit() {

    this.FeedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      "email": ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      "message": ['', Validators.required],
    })
  }

  feedback() {
    // this.FeedbackForm.controls['message'].setValue(encodeURIComponent(this.FeedbackForm.controls['message'].value))
    this.showLoader = true;
    this.remoteApiService.submitFeedback(this.FeedbackForm.value).subscribe((result) => {
      this.showLoader = false;
      this.alertHandler.successAlert();

    }, (err) => {
      this.showLoader = false;
      this.alertHandler.errorAlert();
    })
  }

  /*setupMail() {
    var element = <HTMLElement>(document.getElementById('feedbackButton'));

    element.setAttribute('href', "mailto:contact@ostinohealth.com?subject=feedback&body=" + encodeURIComponent(this.FeedbackForm.controls['message'].value));
  }*/

}
