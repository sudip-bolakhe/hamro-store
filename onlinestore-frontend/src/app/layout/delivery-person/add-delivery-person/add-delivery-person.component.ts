import { Component, OnInit } from '@angular/core';
import { DeliveryPersonModel } from '../delivery-person.model';
import { DeliveryPersonService } from '../delivery-person.service';

@Component({
  selector: 'app-add-delivery-person',
  templateUrl: './add-delivery-person.component.html',
  styleUrls: ['./add-delivery-person.component.scss']
})
export class AddDeliveryPersonComponent implements OnInit {
private model:DeliveryPersonModel= new DeliveryPersonModel();
  constructor(private deliverypersonService:DeliveryPersonService) { }

  ngOnInit() {
  }
addDeliveryPerson(){
  this.deliverypersonService.addDeliveryPerson(this.model).subscribe(
    data=>{
      console.log("added");
    },
    error=>{
        console.log("eror");
    }
  );
}
}
