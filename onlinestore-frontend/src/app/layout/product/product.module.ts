import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';
import { AppComponent } from '../../app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,HttpModule ,FormsModule,ProductRoutingModule,NgxDatatableModule
  ],
  declarations: [AddProductComponent, ViewProductComponent, EditProductComponent],
  providers:[ProductService]
})
export class ProductModule { }
