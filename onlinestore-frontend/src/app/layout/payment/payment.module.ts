import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PaymentRoutingModule } from './payment-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductService } from '../product/product.service';
import { PaymentService } from './payment.service';
import { ViewPaymentComponent } from './view-payment/view-payment.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,HttpModule ,FormsModule,PaymentRoutingModule,NgxDatatableModule,NgSelectModule
  ],
  declarations: [BillingComponent, ViewPaymentComponent],
  providers:[ProductService,PaymentService]
})
export class PaymentModule { }
