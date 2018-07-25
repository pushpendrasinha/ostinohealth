import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable()
export class RemoteApiService {
  constructor(private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post(environment.serverUrl + '/login', credentials);
  }

  register(registrationData) {
    return this.http.post(environment.serverUrl + '/register', registrationData);
  }

  getProductsList() {
    return this.http.get(environment.serverUrl + '/product/getProductsList');
  }

  submitFeedback(data) {
    return this.http.post(environment.serverUrl + '/common/feedback', data);
  }

}
