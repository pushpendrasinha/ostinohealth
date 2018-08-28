import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable()
export class RemoteApiService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post(environment.serverUrl + '/user/login', credentials);
  }

  register(registrationData) {
    return this.http.post(environment.serverUrl + '/user/register', registrationData);
  }

  getProductsList() {
    return this.http.get(environment.serverUrl + '/product/getProductsList');
  }
  getUser() {
    return this.http.get(environment.serverUrl + '/user/getuser');
  }

  getAddresses() {
    return this.http.get(environment.serverUrl + '/address/getAddresses');
  }
  changePassword(credentials) {
    return this.http.post(environment.serverUrl + '/user/changepassword', credentials);
  }
  addAddress(address) {
    return this.http.post(environment.serverUrl + '/address/addAddress', address);
}
  updateAddress(data) {
    return this.http.post(environment.serverUrl + '/address/updateAddress', data);
  }
  deleteAddress(addressId) {
    return this.http.get(environment.serverUrl + `/address/deleteAddress?addressId=${addressId}`);
  }

  editProfile(data) {
    return this.http.post(environment.serverUrl + '/user/edit', data);
  }
  myOrders() {
    return this.http.get(environment.serverUrl + `/orders/myorders`);
  }
  submitFeedback(data) {
    return this.http.post(environment.serverUrl + '/common/feedback', data);
  }
  addProduct(productId) {
    return this.http.post(environment.serverUrl + '/cart/addproduct', {productId: productId});
  }
  removeProduct(productId) {
    return this.http.post(environment.serverUrl + '/cart/removeproduct', {productId: productId});
  }
  viewCart() {
    return this.http.get(environment.serverUrl + '/cart/viewcart');
  }

  changeQuantity(productId, quantity) {
    return this.http.post(environment.serverUrl + '/cart/update', {productId: productId, quantity: quantity});
  }

  checkout() {
    return this.http.get(environment.serverUrl + '/payment/checkoutpage');
  }

  initTransaction(enc, access) {
    return this.http.post("https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction", enc, access)
  }

  resetPassword(email) {
    return this.http.get(environment.serverUrl + `/user/requestresetpassword?email=${email}`);
  }

}
