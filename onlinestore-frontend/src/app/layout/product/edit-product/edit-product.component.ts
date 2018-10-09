import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productModel: ProductModel = new ProductModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private productService:ProductService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.productService.getProductById(params.id).subscribe(
          data => {
            this.productModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            
            this.imageUrl="data:image/jpeg;base64,"+ this.productModel.productPhoto;
          }
        );
      }
    );
  }

  ngOnInit() {
  }
 
  
  updateProduct() {
    this.productService.addProduct(this.productModel).subscribe(
      data => {
          this.router.navigate(['/product/viewproduct']);
      }
    );

  }
}
