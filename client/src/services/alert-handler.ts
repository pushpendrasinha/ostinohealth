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


}
