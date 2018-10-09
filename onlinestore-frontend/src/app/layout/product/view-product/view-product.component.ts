import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  prductModels: Array<ProductModel>;
  temp = [];
  rows: Array<ProductModel> = [];
  columns = [

    { prop: 'name' },
    { prop: 'manufacturer' },
    { prop: 'price' },
    { prop: 'expiryDate' },

  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getAllProduct().subscribe(
      data => {
        this.prductModels = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.rows = this.prductModels;
        this.temp = [...this.prductModels];
      },
      error => {

      }
    );
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.firstName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(
      data => {
        this.getAllProduct();
      }
    );
  }
}
