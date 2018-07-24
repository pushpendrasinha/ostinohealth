import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RemoteApiService } from "../../../../services/remoteapi.service";

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.css']
})
export class DeliveryAddressComponent implements OnInit {
  newaddress: boolean;
  AddressForm: FormGroup;
  Addresses: any;
  constructor(private fb: FormBuilder, private remoteApiService: RemoteApiService) {
    this.newaddress = false;
  }

  ngOnInit() {
    this.remoteApiService.getAddresses().subscribe((result: any) => {
      this.Addresses = result.address;
    }, (err) => {

    })
    this.AddressForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      landmark: [''],
      altContact: ['']
    })
  }

  addAddress() {
    alert(JSON.stringify(this.AddressForm.value, null, 2));
  }

  deleteMe() {
    alert("you are allowed..");
  }
}
