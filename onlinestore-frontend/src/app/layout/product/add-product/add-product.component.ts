import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productModel:ProductModel =new ProductModel();
  constructor(private productService:ProductService ,private router:Router) { }

  ngOnInit() {
   
  }
  addProduct(){
    this.productService.addProduct(this.productModel).subscribe(
      data=>{
        this.router.navigateByUrl("product/viewproduct");
      },
      error=>{

      }
    );
  
  }
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productModel.productPhoto= reader.result.split(',')[1]
       
      };
    }
}

}
