import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Sector } from 'src/app/models/sector';
import { SectorService } from '../../sector/sector.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-dialog-edit-category',
  templateUrl: './dialog-edit-category.component.html',
  styleUrls: ['./dialog-edit-category.component.scss']
})
export class DialogEditCategoryComponent implements OnInit {

  @Input() dialogOpened: boolean = false;
  @Output() dialogOpenedChange = new EventEmitter<boolean>();
  @Output() hasSaved = new EventEmitter<void>();
  
  @Input() category: Category;

  sectorsList: Sector[] = [];

  constructor(private categoryService: CategoryService, private sectorService: SectorService) { }

  ngOnInit(): void {
    this.sectorService.getSectors().subscribe(resp => {
      this.sectorsList = resp;
    }, error => {
      console.log("Deu erro pra buscar setores na pagina de categoria");
    })
  }

  public saveCategory() {
    if(this.category.id == null) {
      this.categoryService.postCategory(this.category).subscribe(resp => {
        this.close()
        this.hasSaved.emit();
      }, error => {
        console.log(error);
        console.log("Erro para salvar Categoria");
      })
    } else {
    this.categoryService.updateCategory(this.category).subscribe(resp => {
      this.close()
      this.hasSaved.emit();
    }, error => {
      console.log(error);
      console.log("Erro para salvar Categoria");
    })
  }

  }

  public close(){
    this.category = null;
    this.dialogOpened = false;
  }

  public onClose() {
    this.dialogOpenedChange.emit(false);
  }


}
