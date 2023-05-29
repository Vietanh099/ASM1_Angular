import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent {
    products!: IProduct[];
    myName: string = '';

    status: boolean = false;

    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    setValue(e: any) {
        this.myName = e.target.value;
    }
    toggle() {
        this.status = !this.status;
    }

    removeItem(id: number) {
        if (window.confirm('Ban co muon xoa ?')) {
            this.productService.deleteProduct(id).subscribe(() => {
                this.products = this.products.filter(
                    (product) => product.id !== id
                );
            });
        }
    }
}
