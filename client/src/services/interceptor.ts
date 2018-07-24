import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { environment } from '../environments/environment';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
    }
    return next.handle(request);
    // .catch((error, caught) => {
    //     if (error.status === 401) {
    //         console.log("Token Invalid");
    //         this.authenticationService.logout();
    //     } else {
    //         return Observable.throw(error);
    //     }
    // }) as any;
  }
}
