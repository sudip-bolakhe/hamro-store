import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard.component';
import { HttpModule } from '@angular/http';
import { UserdashboardRoutingModule } from '../userdashboard/userdashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    UserdashboardRoutingModule
  ],
  declarations: [UserdashboardComponent]
})
export class UserdashboardModule { }
