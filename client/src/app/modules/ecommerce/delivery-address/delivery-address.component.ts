import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { AlertHandler } from "../../../../services/alert-handler";
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  @ViewChild(AddressFormComponent) addressForm: AddressFormComponent;
  newaddress: boolean;
  AddressForm: FormGroup;
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

  addAddress() {
    //alert(JSON.stringify(this.AddressForm.value, null, 2));
    this.addressForm.addAddress();
    }
  updateAddress(addresses) {
    this.Addresses = addresses;
  }
  editAddress(address) {
    this.addressForm.editAddress(address);
    }

  getAddresses() {
    this.addressForm.getAddresses();
    }

  deleteMe(addressId) {
  this.addressForm.deleteMe(addressId);
  }
}
