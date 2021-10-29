import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      { label: '', icon: 'pi pi-home', routerLink: ['/'] },
      { label: 'Produtos', icon: 'pi pi-plus', routerLink: ['/product'] },
      { label: 'Setor', icon: 'pi pi-plus', routerLink: ['/sector'] },
      { label: 'Categorias', icon: 'pi pi-plus', routerLink: ['/category'] },
    ];
  }

}
