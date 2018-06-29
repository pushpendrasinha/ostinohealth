import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { RemoteApiService} from "../../../services/remoteapi.service";
import { PasswordValidation } from "../../../util/passwordvalidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService) { }

  ngOnInit() {
    this.SignupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      contact: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$")]],
      confirmpassword: ['', [Validators.required]]

    }, {
      validator: PasswordValidation.MatchPassword
    })
  }

  register() {
  //alert(JSON.stringify(this.SignupForm.value, null, 2));
    var obj = {
      name: this.SignupForm.controls['name'].value,
      email: this.SignupForm.controls['email'].value,
      contact: this.SignupForm.controls['contact'].value,
      password: this.SignupForm.controls['password'].value
    }
    this.remoteApiService.register(obj).subscribe(() => {
      alert("user registered successfully..")
    }, (err) => {
      console.log("err is " + JSON.stringify(err,null,2));
      alert("something went wrong..");
    })
  }

}
