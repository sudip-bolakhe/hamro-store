import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, Headers } from '@angular/http/';
import { APIConstants } from '../../shared/util/apiconstants';
import { UserModel } from './user-model';

@Injectable()
export class UserService {
  private token:string;
  constructor(private http:Http) {
    this.token=localStorage.getItem('token');
   }
   saveUser(userModel){
     let saveUserUrl= APIConstants.USER_REST_API_ENDPOINT+"/save";
     let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token , 'Content-type': 'application/json' });
     return this.http.post(saveUserUrl, userModel, { headers: getHeaders });

   }
   getAllUser(){
     let getAllUserUrl=APIConstants.USER_REST_API_ENDPOINT+"/list";
     let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token});
     return this.http.get(getAllUserUrl,{ headers: getHeaders });
   }

   getUserById(id){
     let getUserByEdit=APIConstants.USER_REST_API_ENDPOINT+"/"+id;
     let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token});
     return this.http.get(getUserByEdit,{ headers: getHeaders });
   }
   deleteUser(id){
    let deletUserUrl=APIConstants.USER_REST_API_ENDPOINT+"/"+id;
    let getHeaders = new Headers({ 'Authorization': 'Bearer ' + this.token});
    return this.http.delete(deletUserUrl,{ headers: getHeaders });
   }

}
