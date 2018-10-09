import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../order.model';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
 orderModel:OrderModel =new OrderModel();
  constructor() { }

  ngOnInit() {
  }

}
