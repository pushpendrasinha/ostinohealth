import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { AlertHandler } from "../../../../services/alert-handler";

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  newaddress: boolean;
  AddressForm: FormGroup;
 // @Output() addressChange = new EventEmitter();
  Addresses: any;
  addressTitle: any;
  selectedAddress: any;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService, private alertHandler: AlertHandler) {
    this.newaddress = false;
    this.selectedAddress = null;
  }


  resetForm() {
    this.AddressForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      landmark: [''],
      altContact: [''],
      addressType: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.resetForm();
    this.getAddresses();
  }

  addAddress(address) {
    //alert(JSON.stringify(this.AddressForm.value, null, 2));
    let addressValue = this.AddressForm.value;
    if(this.selectedAddress) {
      addressValue._id = this.selectedAddress;
    }
    this.remoteApiService.addAddress(addressValue).subscribe((result: any) => {
      if(result.success) {
        this.selectedAddress = null;
        this.resetForm();
        this.alertHandler.SuccessAlert(result.msg);
        this.newaddress = false;
        this.getAddresses();
      } else {
        this.alertHandler.ErrorAlert(result.msg);
      }


    }, (err) => {
      this.alertHandler.ErrorAlert(err);
    })
  }

  editAddress(address) {
    this.newaddress = true;
    this.addressTitle = "Edit Address";
    this.AddressForm.patchValue(address);
    this.selectedAddress = address._id;
    // alert(JSON.stringify(this.AddressForm.value, null, 2));
    /*this.AddressForm.controls['name'].setValue(address.name);
    this.AddressForm.controls['phone'].setValue(address.name);
    this.AddressForm.controls['pincode'].setValue(address.name);
    this.AddressForm.controls['address'].setValue(address.name);
    this.AddressForm.controls['locality'].setValue(address.name);
    this.AddressForm.controls['state'].setValue(address.name);
    this.AddressForm.controls['state'].setValue(address.name);
    this.AddressForm.controls['state'].setValue(address.name);*/
  }

  public getAddresses() {
    this.remoteApiService.getAddresses().subscribe((result: any) => {
      this.Addresses = result.addresses;
     // this.addressChange.emit(this.Addresses);
    }, (err) => {

    })
  }

  deleteMe(addressId) {
    /*   this.alertHandler.confirmationAlert().then((result) => {
         if (result.value) {
           this.remoteApiService.deleteAddress(addressId).subscribe((result: any) => {

             if(result.success) {
               this.alertHandler.SuccessAlert(result.msg);
               this.getAddresses();
             } else {
               this.alertHandler.ErrorAlert(result.msg);
             }
             }, (err) => {
             this.alertHandler.ErrorAlert(err);
           })

           }
       })*/
  }

}
