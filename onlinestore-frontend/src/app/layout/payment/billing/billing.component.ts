import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../../product/product.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router/';
import { PaymentModel } from '../payment.model';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  paymentModel: PaymentModel = new PaymentModel();
  paymentModel1: PaymentModel = new PaymentModel();
  prductModels: Array<ProductModel>;
  productModel: ProductModel = new ProductModel();

  pName: string;
  selected: string;
  option = [];
  quantity: number;
  total: number;
  rate: any;
  return: any;
  recieved: any;
  stock: any;
  stokRem: any;
  errors:any;
  constructor(private productService: ProductService, private router: Router,
    private paymentService: PaymentService) {

  }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      data => {
        this.prductModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.option = this.prductModels.map(a => a.name);
      },
      error => {

      }
    );
  }
  getPrice() {

    console.log(this.pName);
    for (let i = 0; i < this.prductModels.length; i++) {

      if (this.prductModels[i].name === this.pName) {

        this.productModel = this.prductModels[i];

      }
    }

  }
  onSelected(option: any) {
    this.pName = `${option.label}`;
    this.getPrice();
  }


  calculate() {
    this.errors= "";
    this.total= 0;
    this.rate = this.productModel.price; 
    if(this.productModel.stock>=this.quantity){
    this.total = this.rate * this.quantity;
    }
    else{
     this.errors = "in sufficient quantity";
    }
    

  }
  calculateReturn() {
    this.return = this.recieved - this.total;
  }

  savePayment() {
    this.paymentModel.product = this.productModel.name;
    this.paymentModel.quantity = this.quantity;
    this.paymentModel.amount = this.total;
    this.paymentModel.rate = this.rate;

    this.paymentService.addService(this.paymentModel).subscribe(
      data => {
        this.stock = this.productModel.stock;
        this.stokRem = this.stock - this.quantity;
        this.productModel.stock = this.stokRem;
        this.updateProduct();
        this.router.navigateByUrl("payment/viewpayment");
      }, error => {
        console.log(error);
      }
    );
  }
  updateProduct() {
    this.productService.addProduct(this.productModel).subscribe(
      data => {

      }
    );
  }
}
