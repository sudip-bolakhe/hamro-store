import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { APIConstants } from '../shared/util/apiconstants';

@Injectable()
export class LoginService {  token: string;
  constructor(private http: Http) { }
  sendCredential(model) {
    let loginUrl = APIConstants.LOGIN_API_ENDPOINT;
    let headers1 = new Headers({ 'Content-type': 'application/json' });
    return this.http.post(loginUrl, model, { headers: headers1 });
  }

  getUser(token,username){
    let tokenUrl12= APIConstants.USER_REST_API_ENDPOINT+"/getuser/"+username;
    let getHeaders = new Headers({'Authorization':'Bearer '+token});
    return this.http.get(tokenUrl12,{headers:getHeaders});
  }
 
}
