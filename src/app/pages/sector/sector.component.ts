import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/models/sector';
import { SectorService } from './sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  sectors: Sector[];

  dialogOpened: boolean = false;
  dialogSector: Sector;
  
  constructor(private sectorService: SectorService) { }

  ngOnInit(): void {
    this.getSectors();
  }

  public getSectors(){
    this.sectorService.getSectors().subscribe(resp => {
      this.sectors = resp;
    }, error => {
      console.log(error);
      console.log("Deu erro ai nos setores")
    });
  }

  public editSector(sector: Sector) {
    this.dialogSector = sector;
    this.dialogOpened = true;
  }

  public newSector() {
    this.dialogSector = null;
    this.dialogOpened = true;
    this.dialogSector = new Sector();
  }

  public deleteSector(sector: Sector) {
    this.sectorService.deleteSector(sector).subscribe(resp => {
      this.getSectors();
    }, error => {
      console.log(error);
      console.log("Erro para salvar Categoria");
    })
  }
}
