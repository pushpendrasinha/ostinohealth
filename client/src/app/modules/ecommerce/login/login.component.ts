import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService, private router: Router) { }

  ngOnInit() {
  this.LoginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  }

  login() {
   // alert("called " + JSON.stringify(this.LoginForm.value, null, 2));
    this.remoteApiService.login(this.LoginForm.value).subscribe((result: any) => {
     // alert(JSON.stringify(result,null,2));
      if(result.user && result.user.name) {
        alert("welcome " + result.user.name);
        this.router.navigateByUrl('/ecom/products');
      } else {
        alert(result.error);
      }

    }, (err) => {
      alert("something went wrong..");
    })

  }

}
