import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,RouterModule} from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes= [
  { path: '', component: AddProductComponent},
  { path: 'addproduct', component: AddProductComponent},
  { path: 'viewproduct', component: ViewProductComponent},
  { path: 'editproduct/:id', component: EditProductComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ProductRoutingModule { }
