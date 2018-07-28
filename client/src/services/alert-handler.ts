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

  confirmationAlert() {
    return swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  }

}
