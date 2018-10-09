import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';

@Injectable()
export class PaymentService {
  private token:string;
  constructor(private http:Http) {
    this.token=localStorage.getItem('token');
   }
   addService(paymentModel){
 
     let addPaymentUrl=APIConstants.PAYMENT_REST_API_ENDPOINT+"/save";
     let getHeaders= new Headers({ 'Authorization': 'Bearer ' + this.token , 'Content-type': 'application/json'});
     return this.http.post(addPaymentUrl,paymentModel,{headers:getHeaders});
   }
   deletePayment(id){
    let deletePaymentctUrl=APIConstants.PAYMENT_REST_API_ENDPOINT+"/"+id;
    let getHeaders= new Headers({ 'Authorization': 'Bearer '+ this.token});
    return this.http.delete(deletePaymentctUrl,{headers:getHeaders})
  }
  getAllPayment(){
    let getAllPaymenttUrl=APIConstants.PAYMENT_REST_API_ENDPOINT+"/list";
    let getHeaders= new Headers({ 'Authorization': 'Bearer '+ this.token});
    return this.http.get(getAllPaymenttUrl,{headers:getHeaders})
  }

    
}
