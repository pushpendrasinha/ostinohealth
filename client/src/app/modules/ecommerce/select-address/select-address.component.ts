import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RemoteApiService } from "../../../../services/remoteapi.service";
import { AlertHandler } from "../../../../services/alert-handler";
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.css']
})
 export class SelectAddressComponent implements OnInit, AfterViewInit {
  @ViewChild(AddressFormComponent) addressComponent: AddressFormComponent;
 // @ViewChild('someInput') addressComponent: AddressFormComponent;
  Addresses: any;
  newaddress: boolean;
  selectedAddress: any;
  constructor(private remoteApiService: RemoteApiService, private alertHandler: AlertHandler) {
    this.newaddress = false;
  }

  ngOnInit() {
   // this.getAddresses();
   // this.addressComponent.getAddresses();
  }

  ngAfterViewInit() {
    this.addressComponent.getAddresses();
  }
 /* getAddresses() {
    this.remoteApiService.getAddresses().subscribe((result: any) => {
      this.Addresses = result.addresses;
      this.selectedAddress = this.Addresses[0]._id;
    }, (err) => {

    })
  }*/
  updateAddress(addresses) {
    alert("new addresses " + JSON.stringify(addresses, null, 2));
    this.Addresses = addresses;
  }

  proceedToCheckout() {
   // alert("selected " + this.selectedAddress);
    if(this.selectedAddress) {
      this.alertHandler.showLoading();
      this.remoteApiService.checkout(this.selectedAddress).subscribe((result: any)=> {
        this.alertHandler.hideLoading();
        // alert(JSON.stringify(result, null, 2));
        window.location.href = result.url;
      })
    } else {
      this.alertHandler.ErrorAlert("please choose delivery address");
    }

  }

}
