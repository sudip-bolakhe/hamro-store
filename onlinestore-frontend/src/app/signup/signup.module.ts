import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HttpModule } from '@angular/http/';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login/login.service';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [SignupComponent],
  providers: [LoginService]
})
export class SignupModule { }
