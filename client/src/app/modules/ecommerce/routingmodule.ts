import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { SignupComponent} from "./signup/signup.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { MyordersComponent } from "./myorders/myorders.component";
import { DeliveryAddressComponent } from "./delivery-address/delivery-address.component";
import { CartComponent } from "./cart/cart.component";
import { ProfileComponent } from "./profile/profile.component";


const routes: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'myorders', component: MyordersComponent },
  {path: 'address', component: DeliveryAddressComponent },
  {path: 'cart', component: CartComponent },
  {path: 'products', component: ProductsListComponent },
  {path: 'profile', component: ProfileComponent }


  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
/*export const routingComponents = [LoginComponent,SignupComponent,ForgotPasswordComponent,
  ContentComponent,ExceptionComponent,UnauthorizedComponent]*/
