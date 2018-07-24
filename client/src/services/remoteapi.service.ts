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
    return this.http.get(environment.serverUrl + '/user/getaddresses');
  }

}
