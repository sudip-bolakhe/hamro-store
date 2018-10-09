import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { APIConstants } from '../shared/util/apiconstants';
import { Http,Headers } from '@angular/http';
import { UserModel } from '../layout/user/user-model';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    userModel: UserModel=new UserModel();
   private showMessage: String ;
    constructor(private http:Http,private router:Router,private loginService:LoginService) {
        this.userModel.role="User";
    }

    ngOnInit() {
      
    }

        signup(){
            this.addUser().subscribe(
                data=>{
                    this.showMessage="sign up sucessful";
                    
                    console.log("added");
                   this.login();
                },
                error=>{
                    console.log("error");
                }
            );
        }
    addUser(){
        console.log("reached");
        let saveUserUrl= APIConstants.SIGNUP_API_ENDPOINT;
        let getHeaders = new Headers({ 'Content-type': 'application/json' });
        return this.http.post(saveUserUrl,this.userModel,{headers:getHeaders});
   
      }
      login(){
        this.loginService.sendCredential(this.userModel).subscribe(data => {
            localStorage.setItem("isLoggedin", 'true');
            localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);

            this.loginService.getUser(localStorage.getItem('token'), this.userModel
                .username).subscribe(data => {
                    var userResponseJson = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                    localStorage.setItem("username", userResponseJson.username);
                    localStorage.setItem("id", userResponseJson.id);
                    localStorage.setItem("firstName", userResponseJson.firstName);
                    localStorage.setItem("role", userResponseJson.role);
                    if (localStorage.getItem('role') == "Admin") {
                        this.router.navigateByUrl("dashboard");
                    }else {
                        this.router.navigateByUrl("userdashboard");
                    }
                }, error => {

                });
        }, error => {
            console.log();
        }
        );
      }
}
