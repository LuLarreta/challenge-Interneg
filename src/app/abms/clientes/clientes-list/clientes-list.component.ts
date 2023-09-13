import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';


import { ClientesService } from '../clientes.service';
import { ClientesCreateComponent } from '../clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from '../clientes-delete/clientes-delete.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],

  
})
export class ClientesListComponent implements OnInit {
  searchString: string = '';
  clientes: any[] = [];
  currentPage = 1; 
  totalPages = 1;
  totalResults = 0; 
  itemsPerPage = 7; 
  
  constructor(
    private clientesService: ClientesService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obtenerListadoClientes();
  }

  obtenerListadoClientes(): void {
    this.clientesService
      .getListadoClientes(
        this.searchString,
        '',
        '',
        this.currentPage,
        this.itemsPerPage
      )
      .subscribe((response: any) => {
        this.clientes = response.data;
        this.totalResults = response.pagination.totalResults;
        this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
      });
  }
  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPages) {
      this.currentPage = pagina;
      this.obtenerListadoClientes();
    }
  }
  siguientePagina(): void {
    this.irAPagina(this.currentPage + 1);
  }

  paginaAnterior(): void {
    this.irAPagina(this.currentPage - 1);
  }
  buscarClientes() {
    this.obtenerListadoClientes();
  }
  abrirModalCrearCliente() {
    const modalRef = this.modalService.show(ClientesCreateComponent, {
      class: 'modal-lg'
    });
  }
  abrirModalDeleteCliente(cliente: any) {
    const initialState = {
      cliente: cliente
    };
    const modalRef = this.modalService.show(ClientesDeleteComponent, {
      initialState
    });
  }
}
