import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { AlertHandler } from '../services/alert-handler';


@Injectable()
export class ExceptionHandler implements ErrorHandler {

  constructor(private injector: Injector, private zone: NgZone) { }

  handleError(error) {
    console.log(error);
    const router = this.injector.get(Router);

    if (error.status === 401) {
      /*const authenticationService = this.injector.get(AuthenticationService);
      authenticationService.logout(false);*/
      this.zone.run(() => router.navigateByUrl('/login'));
    } else {
      const alertHandler = this.injector.get(AlertHandler);
      alertHandler.ErrorAlert("something went wrong");


      //Optional Handling to route to Exception Page
      //this.zone.run(() => router.navigate(['/exception']));
    }
  }
}
