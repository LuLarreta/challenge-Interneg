import { Component, OnInit  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent  implements OnInit  {
  searchString: string = '';
  ventas: any[] = [];
  currentPage = 1;
  totalPages = 1;
  totalResults = 0;
  itemsPerPage = 7;

  constructor(
    private ventasService: VentasService,
    private modalService: BsModalService
  ) {}

  
  ngOnInit(): void {
    this.obtenerListadoVentas();
  }

  obtenerListadoVentas(): void {
    this.ventasService
      .getListadoVentas(
        this.searchString,
        '',
        '',
        this.currentPage,
        this.itemsPerPage
      )
      .subscribe((response: any) => {
        this.ventas = response.data;
        this.totalResults = response.pagination.totalResults;
        this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
      });
  }
  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPages) {
      this.currentPage = pagina;
      this.obtenerListadoVentas();
    }
  }
  siguientePagina(): void {
    this.irAPagina(this.currentPage + 1);
  }
  paginaAnterior(): void {
    this.irAPagina(this.currentPage - 1);
  }
  buscarVentas() {
    this.obtenerListadoVentas();
  }

}
