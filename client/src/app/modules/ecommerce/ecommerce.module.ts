import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EcommerceRoutingModule } from './routingmodule';
import { LoginComponent} from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import { ProfileComponent } from './profile/profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HomeComponent } from './home/home.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { SelectAddressComponent } from './select-address/select-address.component';

@NgModule({
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MyordersComponent,
    DeliveryAddressComponent,
    CartComponent,
    ProductsListComponent,
    HomeComponent,
    AddressFormComponent,
    SelectAddressComponent

  ]
})
export class EcommerceModule { }
