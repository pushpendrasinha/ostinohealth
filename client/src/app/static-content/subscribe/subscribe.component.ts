import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RemoteApiService} from "../../../services/remoteapi.service";
import { AlertHandler } from "../../../services/alert-handler";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  SubscriptionForm: FormGroup;
  constructor(private fb: FormBuilder,
              private remoteApiService: RemoteApiService,
              private alertHandler: AlertHandler) { }

  ngOnInit() {
    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'ecom/products';
    this.SubscriptionForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required]
    })
  }
  subscribe() {
    /*var data = {

    }*/
    this.remoteApiService.subscriptionRequest(this.SubscriptionForm.value).subscribe((result: any) => {
      if(result.success) {
        this.alertHandler.SuccessAlert(result.msg)
      } else {
        this.alertHandler.ErrorAlert(result.msg);
      }
    }, (err) => {

    })
  }




}
