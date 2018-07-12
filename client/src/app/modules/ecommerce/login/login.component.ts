import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService) { }

  ngOnInit() {
  this.LoginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  }

  login() {
   // alert("called " + JSON.stringify(this.LoginForm.value, null, 2));
    this.remoteApiService.login(this.LoginForm.value).subscribe((result: any) => {
      if(result.user && result.user.name) {
        alert("welcome " + result.user.name)
      } else {
        alert("invalid username/password");
      }

    }, (err) => {
      alert("something went wrong..");
    })

  }

}
