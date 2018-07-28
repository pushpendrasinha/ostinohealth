import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import {PasswordValidation} from "../../../../util/passwordvalidator";
import { AlertHandler } from "../../../../services/alert-handler";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdetails: any;
  changePasswordForm: FormGroup;
  personalInfo: FormGroup;
  constructor(private remoteApiService: RemoteApiService, private formbuilder: FormBuilder, private alertHandler: AlertHandler, private authService: AuthService) { }

  ngOnInit() {
    this.passwordForm();
    this.personalInfoForm();
    this.getUpdateUserInfo();
  }

  passwordForm() {
    this.changePasswordForm = this.formbuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$")]],
      confirmPassword: ['', Validators.required]
    },{
      validator: PasswordValidation.MatchPassword
    })
  }
  getUpdateUserInfo() {
    this.remoteApiService.getUser().subscribe((result: any) => {
      if(result.success) {
        this.userdetails = result.user;
        this.authService.userdetails.next(this.userdetails);
        this.personalInfo.patchValue(this.userdetails);
      } else {

      }
    }, (err) => {

    })
  }

  personalInfoForm() {
    this.personalInfo = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contact: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  changePassword() {
    this.remoteApiService.changePassword(this.changePasswordForm.value).subscribe((result: any) => {
      if(result.success) {
        this.alertHandler.SuccessAlert(result.msg);
      } else {
        this.alertHandler.ErrorAlert(result.msg);
      }
    }, (err) => {
      this.alertHandler.ErrorAlert(err);
    })
  }

  updateProfile() {
    this.remoteApiService.editProfile(this.personalInfo.value).subscribe((result: any) => {
      if(result.success) {
        this.getUpdateUserInfo();
        this.alertHandler.SuccessAlert(result.msg);
      } else {
        this.alertHandler.ErrorAlert(result.msg);
      }
    }, (err) => {
      this.alertHandler.ErrorAlert(err);
    })
  }

}
