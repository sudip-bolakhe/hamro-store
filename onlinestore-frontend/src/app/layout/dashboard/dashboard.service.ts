import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';
@Injectable()
export class DashboardService {
  token: string;

  constructor(private http: Http) {
    this.token = localStorage.getItem("token");
  }

  getUserCount() {
    let userCounturl = APIConstants.USER_REST_API_ENDPOINT + "/count";
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token });
    return this.http.get(userCounturl, { headers: getHeaders });
  }
  getDeliveryPersonCount() {
    let deliveryCountUrl = APIConstants.DELIVERY_REST_API_ENDPOINT + "/count";
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token });
    return this.http.get(deliveryCountUrl, { headers: getHeaders });
  }
  getProductCount() {
    let productCountUrl = APIConstants.PRODUCT_REST_API_ENDPOINT + "/count";
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token });
    return this.http.get(productCountUrl, { headers: getHeaders });
  }
  getOrderCount() {
    let orderCountUrl = APIConstants.ORDER_REST_API_ENDPOINT + "/count";
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token });
    return this.http.get(orderCountUrl, { headers: getHeaders });
  }
}
