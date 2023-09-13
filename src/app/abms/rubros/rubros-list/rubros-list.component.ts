import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { RubrosService } from '../rubros.service';
import { RubrosCreateComponent } from '../rubros-create/rubros-create.component';
import { RubrosDeleteComponent } from '../rubros-delete/rubros-delete.component';

@Component({
  selector: 'app-rubros-list',
  templateUrl: './rubros-list.component.html',
  styleUrls: ['./rubros-list.component.css'],
})
export class RubrosListComponent implements OnInit {
  searchString: string = '';
  rubros: any[] = [];
  currentPage = 1; 
  totalPages = 1;
  totalResults = 0;
  itemsPerPage = 7;

  constructor(
    private rubrosService: RubrosService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obtenerListadoRubros();
  }

  obtenerListadoRubros(): void {
    this.rubrosService
      .getListadoRubros(
        this.searchString,
        '',
        '',
        this.currentPage,
        this.itemsPerPage
      )
      .subscribe((response: any) => {
        this.rubros = response.data;
        this.totalResults = response.pagination.totalResults;
        this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
      });
  }
  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPages) {
      this.currentPage = pagina;
      this.obtenerListadoRubros();
    }
  }
  siguientePagina(): void {
    this.irAPagina(this.currentPage + 1);
  }
  paginaAnterior(): void {
    this.irAPagina(this.currentPage - 1);
  }
  buscarRubros() {
    this.obtenerListadoRubros();
  }
  abrirModalCrearRubro() {
    const modalRef = this.modalService.show(RubrosCreateComponent, {
      class: 'modal-lg',
    });
  }
  abrirModalDeleteRubro(rubro: any) {
    const initialState = {
      rubro: rubro
    };
    const modalRef = this.modalService.show(RubrosDeleteComponent, {
      initialState
    });
  }
}
