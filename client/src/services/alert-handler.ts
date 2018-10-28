import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';


@Injectable()
export class AlertHandler {
  constructor() {
  }

  errorAlert() {
    Swal({
      title: 'Feedback',
      type: 'error',
      text: "please try again"
    });
  }
  successAlert() {
    Swal({
      title: 'Feedback',
      type: 'success',
      text: "Feedback submitted"
    });
  }
  SuccessAlert(title) {
    Swal({
      type: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  WarningAlert(title) {
    Swal({
      type : 'warning',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  ErrorAlert(title) {
    Swal({
      type : 'error',
      title: title,
      showConfirmButton: false,
      timer: 2000
    })



}
}
