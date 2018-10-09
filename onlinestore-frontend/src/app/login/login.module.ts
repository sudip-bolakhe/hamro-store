import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Http,HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule,HttpModule],
    declarations: [LoginComponent],
    providers:[LoginService],
})
export class LoginModule {}
