import { NgModule } from '@angular/core';
import {  Routes,RouterModule} from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ViewPaymentComponent } from './view-payment/view-payment.component';


const routes: Routes= [
  {path : '' , component: BillingComponent},
  {path : 'billing', component: BillingComponent},
  { path: 'viewpayment', component: ViewPaymentComponent},
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class PaymentRoutingModule { }