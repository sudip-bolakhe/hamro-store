import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        let loggedin=localStorage.getItem('isLoggedin');
        let token=localStorage.getItem('token');
        if (token && loggedin) {
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}
