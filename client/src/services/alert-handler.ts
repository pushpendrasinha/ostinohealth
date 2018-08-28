import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import {SubjectSubscription} from "rxjs/SubjectSubscription";
import {Subject} from "rxjs/Subject";
import { RemoteApiService } from "./remoteapi.service";

@Injectable()
export class AlertHandler {
  loader: Subject<boolean>;
  constructor(private remoteApiService: RemoteApiService) {
    this.loader = new Subject<boolean>();
  }

  showLoading() {
    this.loader.next(true);
  }

  hideLoading() {
    this.loader.next(false);
  }

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

  /*  confirmationAlert() {
      return swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
    }*/

  confirmationAlert(options) {
    return swal({
      title: options.title,
      text: options.text ? options.text : '',
      type: options.type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: options.confirmButtonText ? options.confirmButtonText : 'OK'
    })
  }
  askUserForEmail1() {
    return swal({
      title: 'Enter Your registered Email ID',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },

      showCancelButton: true,
      confirmButtonText: 'Reset Password',
      showLoaderOnConfirm: true
    })
  }

  askUserForEmail() {
    swal({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        return this.remoteApiService.resetPassword(data).subscribe((data) => {
          alert("data is " + JSON.stringify(data, null, 2));
        }, (err) => {
          alert("error is " + err);
        })
      /*  return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            swal.showValidationError(
              `Request failed: ${error}`
            )
          })*/
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {

      alert("result " + JSON.stringify(result,null,2));
      if (result.value) {
        swal({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }
  askUserForEmail2() {
    swal({
      title: 'Enter Your registered Email ID',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Reset Password',
      showLoaderOnConfirm: true,
      preConfirm: (data) => {
        alert("data is " + data);
  /*      if(data.value) {
          alert(data.value);
        }
 else {
          alert("input value");
        } */   /*    this.remoteApiService.resetPassword(email).subscribe((result: any) => {
          if(result.success) {
            swal.close();
            this.SuccessAlert("Check your mail for instructions");
          }
          else {
            swal.showValidationError(result.msg);
          }       })*/

      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      if (result.value) {
        alert(result.value);
      /*  swal({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })*/
      }
    })
  }

}
