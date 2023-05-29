import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product! : IProduct;

  productForm = this.formBuilder.group({
    name:['',[Validators.required]],
    price:[0]
  })

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
  ){
    this.router.paramMap.subscribe((params =>{
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe(data =>
        {
          this.product = data

          this.productForm.patchValue({
            name:data.name,
            price:data.price
          })

      })
    }))
  }

  onHandleSubmit(){
    if(this.productForm.valid){
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }

      this.productService.updateProduct(product).subscribe(data =>{
        
      })
    }
  }
}
