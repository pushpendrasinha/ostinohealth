import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class AlertHandler {

  constructor() { }

  SuccessAlert(title) {  
    swal({
      type: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  WarningAlert(title) {
    swal({
      type : 'warning',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  ErrorAlert(title) {
    swal({
      type : 'error',
      title: title,
      showConfirmButton: false,
      timer: 2000
    });
  }

}
