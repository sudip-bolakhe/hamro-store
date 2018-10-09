import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrderComponent } from './view-order/view-order.component';
import { AddOrderComponent } from './add-order/add-order.component';

const routes:Routes=[
  {path:'', component:ViewOrderComponent},
  {path :'addorder' , component:AddOrderComponent},
  {path:'vieworder',component:ViewOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class OrderRoutingModule { }
