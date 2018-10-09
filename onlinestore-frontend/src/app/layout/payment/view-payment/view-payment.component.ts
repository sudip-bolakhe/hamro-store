import { Component, OnInit } from '@angular/core';
import { PaymentModel } from '../payment.model';
import { ViewChild } from '@angular/core/';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {
count:number=1;
  paymentModels: Array<PaymentModel>;
  temp = [];
  rows: Array<PaymentModel> = [];
  columns = [

    { prop: 'name' },
    { prop: 'product' },
    { prop: 'amount' },

  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit() {
    this.getAllPayment();
  }
  getAllPayment() {
    this.paymentService.getAllPayment().subscribe(
      data => {
        this.paymentModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.paymentModels;
        this.temp = [...this.paymentModels];
      },
      error => {

      }
    );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  deletePayment(id) {
    this.paymentService.deletePayment(id).subscribe(
      data => {
        this.getAllPayment();
      }
    );
  }

}
