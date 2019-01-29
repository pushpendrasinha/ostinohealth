import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { MyordersComponent } from "./myorders/myorders.component";
import { DeliveryAddressComponent } from "./delivery-address/delivery-address.component";
import { CartComponent } from "./cart/cart.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "../../../services/auth.service";
import { SelectAddressComponent } from "./select-address/select-address.component";
import { ProductDescriptionComponent } from './product-description/product-description.component';



const routes: Routes = [

 /*  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'myorders', component: MyordersComponent, canActivate: [AuthService] },
  {path: 'address', component: DeliveryAddressComponent, canActivate: [AuthService] },
  {path: 'cart', component: CartComponent, canActivate: [AuthService] },
  {path: 'products', component: ProductsListComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
  {path: 'home', component:  HomeComponent, canActivate: [AuthService],
    children: [
      {path: '', redirectTo: 'profile'},
      {path: 'profile', component: ProfileComponent},
      {path: 'myorders', component: MyordersComponent},
      {path: 'address', component: DeliveryAddressComponent },
    ]},
  {path: 'selectaddress', component: SelectAddressComponent, canActivate: [AuthService] },
  {path: 'product-description', component: ProductDescriptionComponent }, */


  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
/*export const routingComponents = [LoginComponent,SignupComponent,ForgotPasswordComponent,
  ContentComponent,ExceptionComponent,UnauthorizedComponent]*/
