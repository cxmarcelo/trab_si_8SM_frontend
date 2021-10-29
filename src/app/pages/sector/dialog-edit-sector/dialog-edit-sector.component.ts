import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sector } from 'src/app/models/sector';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-dialog-edit-sector',
  templateUrl: './dialog-edit-sector.component.html',
  styleUrls: ['./dialog-edit-sector.component.scss']
})
export class DialogEditSectorComponent implements OnInit {

  @Input() dialogOpened: boolean = false;
  @Output() dialogOpenedChange = new EventEmitter<boolean>();
  @Output() hasSaved = new EventEmitter<void>();

  @Input() sector: Sector;

  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
  }

  public saveSector() {
    if (this.sector.id == null) {
      this.sectorService.postSector(this.sector).subscribe(resp => {
        console.log(resp)
        console.log("Salvo")
        this.close()
        this.hasSaved.emit();
      }, error => {
        console.log("Erro para salvar Categoria");
      })
    } else {
      this.sectorService.updateSector(this.sector).subscribe(resp => {
        console.log(resp)
        console.log("Salvo")
        this.close()
        this.hasSaved.emit();
      }, error => {
        console.log("Erro para salvar Categoria");
      })
    }
  }

  public close() {
    this.sector = null;
    this.dialogOpened = false;
  }

  public onClose() {
    this.dialogOpenedChange.emit(false);
  }
}