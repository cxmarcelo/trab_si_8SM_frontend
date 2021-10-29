import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];

  dialogOpened: boolean = false;
  dialogProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe(resp => {
      this.products = resp;
    }, error => {
      console.log(error);
      console.log("Deu erro ai nos produtos")
    });
  }
  
  public editProduct(product: Product) {
    this.dialogProduct = product;
    this.dialogOpened = true;
  }

  public newProduct() {
    this.dialogProduct = null;
    this.dialogOpened = true;
    this.dialogProduct = new Product();
  }

  public deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(resp => {
      this.getProducts();
    }, error => {
      console.log(error);
      console.log("Erro para salvar Produtos");
    })
  }

}
