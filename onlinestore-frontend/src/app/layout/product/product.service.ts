import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { APIConstants } from '../../shared/util/apiconstants';

@Injectable()
export class ProductService {
  private token:string;
  constructor(private http:Http) {
    this.token=localStorage.getItem('token');
   }
   addProduct(productModel){
     let addProductUrl=APIConstants.PRODUCT_REST_API_ENDPOINT+"/save";
     let getHeaders= new Headers({ 'Authorization': 'Bearer ' + this.token , 'Content-type': 'application/json'});
     return this.http.post(addProductUrl,productModel,{headers:getHeaders});
   }
   getAllProduct(){
     let getAllProductUrl=APIConstants.PRODUCT_REST_API_ENDPOINT+"/list";
     let getHeaders= new Headers({ 'Authorization': 'Bearer '+ this.token});
     return this.http.get(getAllProductUrl,{headers:getHeaders})
   }
   deleteProduct(id){
     let deleteProductUrl=APIConstants.PRODUCT_REST_API_ENDPOINT+"/"+id;
     let getHeaders= new Headers({ 'Authorization': 'Bearer '+ this.token});
     return this.http.delete(deleteProductUrl,{headers:getHeaders})
   }
   getProductById(id){
    let getlProductById=APIConstants.PRODUCT_REST_API_ENDPOINT+"/"+id;
    let getHeaders= new Headers({ 'Authorization': 'Bearer '+ this.token});
    return this.http.get(getlProductById,{headers:getHeaders})
   }

}
