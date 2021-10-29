import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  dialogOpened: boolean = false;
  dialogCategory: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe(resp => {
      this.categories = resp;
    }, error => {
      console.log(error);
      console.log("Deu erro ai nas Categorias")
    });
  }

  public editCategory(category: Category) {
    this.dialogCategory = category;
    this.dialogOpened = true;
  }

  public newCategory() {
    this.dialogCategory = null;
    this.dialogOpened = true;
    this.dialogCategory = new Category();
  }

  public deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category).subscribe(resp => {
      this.getCategories();
    }, error => {
      console.log(error);
      console.log("Erro para salvar Categoria");
    })
  }
}
