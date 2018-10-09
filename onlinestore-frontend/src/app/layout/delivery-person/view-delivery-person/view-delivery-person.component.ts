import { Component, OnInit } from '@angular/core';
import { DeliveryPersonService } from '../delivery-person.service';
import { DeliveryPersonModel } from '../delivery-person.model';

@Component({
  selector: 'app-view-delivery-person',
  templateUrl: './view-delivery-person.component.html',
  styleUrls: ['./view-delivery-person.component.scss']
})
export class ViewDeliveryPersonComponent implements OnInit {

   private  deliveryPersonModels:Array<DeliveryPersonModel>;
  constructor(private deliveryPersonService:DeliveryPersonService) { }

  ngOnInit() {
    this.getAllPerson();
  }
  getAllPerson(){
    this.deliveryPersonService.getAllDeliveryPerson().subscribe(
      data=>{
          let response=JSON.parse(JSON.parse(JSON.stringify(data))._body);
          console.log(response);
      },error=>{

      }
    );
  }
}
