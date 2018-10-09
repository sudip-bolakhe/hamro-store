import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';

@Injectable()
export class DeliveryPersonService {
  private token:String;
  constructor(private http:Http) {
    this.token=localStorage.getItem('token');


   }

  getAllDeliveryPerson(){
    let getDeliveryPersonUrl= APIConstants.DELIVERY_REST_API_ENDPOINT+"/list";
    let  getHeaders= new Headers({ 'Authorization': 'Bearer ' + this.token });
    return this.http.get(getDeliveryPersonUrl,{headers:getHeaders});
  }

  addDeliveryPerson(model){
    let addDeliveryPersonUrl=APIConstants.DELIVERY_REST_API_ENDPOINT+"/save";
    let getHeaders= new Headers({ 'Authorization': 'Bearer ' + this.token , 'Content-type': 'application/json' });
    return this.http.post(addDeliveryPersonUrl,model,{headers:getHeaders});
  }
}
