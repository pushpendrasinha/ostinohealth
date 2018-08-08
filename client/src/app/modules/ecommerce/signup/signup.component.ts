import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { RemoteApiService} from "../../../../services/remoteapi.service";
import { PasswordValidation } from "../../../../util/passwordvalidator";
import { AlertHandler } from "../../../../services/alert-handler";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService, private alertHandler: AlertHandler, private router: Router) { }

  ngOnInit() {
    this.SignupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contact: ['', Validators.required],
      gender: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$")]],
      confirmPassword: ['', [Validators.required]]

    }, {
      validator: PasswordValidation.MatchPassword
    })
  }

  register() {
  //alert(JSON.stringify(this.SignupForm.value, null, 2));
    this.alertHandler.showLoading();
    var obj = {
      name: this.SignupForm.controls['name'].value,
      email: this.SignupForm.controls['email'].value,
      contact: this.SignupForm.controls['contact'].value,
      password: this.SignupForm.controls['newPassword'].value,
      gender: this.SignupForm.controls['gender'].value
    }
    this.remoteApiService.register(obj).subscribe((result: any) => {
    this.alertHandler.hideLoading();
      if(result.success) {
        this.alertHandler.SuccessAlert(result.msg);
        this.router.navigateByUrl("/ecom/login");
      } else {
        this.alertHandler.ErrorAlert(result.msg);
      }
    }, (err) => {
      console.log("err is " + JSON.stringify(err,null,2));
      this.alertHandler.ErrorAlert(err);
    })
  }

}
