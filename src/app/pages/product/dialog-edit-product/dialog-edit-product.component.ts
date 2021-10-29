import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dialog-edit-product',
  templateUrl: './dialog-edit-product.component.html',
  styleUrls: ['./dialog-edit-product.component.scss']
})
export class DialogEditProductComponent implements OnInit {

  @Input() dialogOpened: boolean = false;
  @Output() dialogOpenedChange = new EventEmitter<boolean>();
  @Output() hasSaved = new EventEmitter<void>();

  @Input() product: Product;

  categoriesList: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(resp => {
      this.categoriesList = resp;
    }, error => {
      console.log("Deu erro pra buscar categorias na pagina de produtos");
    })
  }

  public saveProduct() {
    if (this.product.id == null) {
      this.productService.postProduct(this.product).subscribe(resp => {
        this.close()
        this.hasSaved.emit();
      }, error => {
        console.log(error);
        console.log("Erro para salvar Produto");
      })
    } else {
      this.productService.updateProduct(this.product).subscribe(resp => {
        this.close()
        this.hasSaved.emit();
      }, error => {
        console.log(error);
        console.log("Erro para salvar Produto");
      })
    }

  }

  public close() {
    this.product = null;
    this.dialogOpened = false;
  }

  public onClose() {
    this.dialogOpenedChange.emit(false);
  }

}
