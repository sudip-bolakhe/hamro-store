import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/';
import { ViewDeliveryPersonComponent } from './view-delivery-person/view-delivery-person.component';
import { RouterModule } from '@angular/router/';
import { EditDeliveryPersonComponent } from './edit-delivery-person/edit-delivery-person.component';
import { AddDeliveryPersonComponent } from './add-delivery-person/add-delivery-person.component';

const routes: Routes = [
  { path: 'delivery', component: ViewDeliveryPersonComponent },
  { path: 'editdeliveryperson/:id', component: EditDeliveryPersonComponent},
  { path: 'adddeliveryperson', component: AddDeliveryPersonComponent },
  { path: 'viewdeliveryperson', component: ViewDeliveryPersonComponent },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  declarations: []
})
export class DeliveryPersonRoutingModule { }
