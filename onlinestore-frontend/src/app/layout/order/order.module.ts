import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/';
import { OrderRoutingModule } from './order-routing.module';
import { OrderService } from './order.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpModule,OrderRoutingModule
  ],
  declarations: [AddOrderComponent, ViewOrderComponent],
  providers:[OrderService]
})
export class OrderModule { }
