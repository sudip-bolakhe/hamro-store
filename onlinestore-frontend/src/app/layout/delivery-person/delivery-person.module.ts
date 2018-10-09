import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDeliveryPersonComponent } from './view-delivery-person/view-delivery-person.component';
import { HttpModule } from '@angular/http/';
import { FormsModule } from '@angular/forms';
import { DeliveryPersonRoutingModule } from './delivery-person-routing.module';
import { DeliveryPersonService } from './delivery-person.service';
import { EditDeliveryPersonComponent } from './edit-delivery-person/edit-delivery-person.component';
import { AddDeliveryPersonComponent } from './add-delivery-person/add-delivery-person.component';

@NgModule({
  imports: [
    CommonModule,HttpModule,FormsModule,DeliveryPersonRoutingModule
  ],
  declarations: [ViewDeliveryPersonComponent,EditDeliveryPersonComponent, AddDeliveryPersonComponent],
  providers:[DeliveryPersonService]
})
export class DeliveryPersonModule { }
