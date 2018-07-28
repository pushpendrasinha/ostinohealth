import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";
import { AlertHandler } from "../../../../services/alert-handler";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
LoginForm: FormGroup;
  returnUrl: String;
  constructor(private fb: FormBuilder,
              private remoteApiService: RemoteApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private alertHandler: AlertHandler) { }

  ngOnInit() {
   // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'ecom/products';
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
       // alert("welcome " + result.user.name);
        this.alertHandler.SuccessAlert(`Welcome ${result.user.name}`);
        localStorage.setItem('token', result.token);
        this.authService.setLoginStatus();
        this.authService.userdetails.next(result.user);
        this.router.navigateByUrl('/ecom/products');
      } else {
        alert(result.error);
      }

    }, (err) => {
      alert("something went wrong..");
    })

  }

}
