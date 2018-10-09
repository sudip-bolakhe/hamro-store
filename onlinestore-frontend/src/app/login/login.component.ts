import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    errorMessage:String="";
    constructor(public router: Router, private loginservice: LoginService) { }
    private model = { 'username': '', 'password': '' }
    ngOnInit() { }

    onLoggedin() {
        this.loginservice.sendCredential(this.model).subscribe(data => {
            localStorage.setItem("isLoggedin", 'true');
            localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
            console.log(localStorage.getItem("isloggedin"));
            this.loginservice.getUser(localStorage.getItem('token'), this.model
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
           this.errorMessage="Username and password didnt matched";
        }
        );
    }




}
