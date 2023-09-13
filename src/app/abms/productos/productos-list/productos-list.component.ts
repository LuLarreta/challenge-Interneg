import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { ProductosService } from '../productos.service';
import { ProductosCreateComponent } from '../productos-create/productos-create.component';
import { ProductosDeleteComponent } from '../productos-delete/productos-delete.component';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit  {
  searchString: string = '';
  productos: any[] = [];
  currentPage = 1; 
  totalPages = 1;
  totalResults = 0; 
  itemsPerPage = 7; 

  constructor(
    private productosService: ProductosService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.obtenerListadoProductos();
  }
  obtenerListadoProductos(): void {
    this.productosService
      .getListadoProductos(
        this.searchString,
        '',
        '',
        this.currentPage,
        this.itemsPerPage
      )
      .subscribe((response: any) => {
        this.productos = response.data;
        this.totalResults = response.pagination.totalResults;
        this.totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
      });
  }
  irAPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPages) {
      this.currentPage = pagina;
      this.obtenerListadoProductos();
    }
  }
  siguientePagina(): void {
    this.irAPagina(this.currentPage + 1);
  }

  paginaAnterior(): void {
    this.irAPagina(this.currentPage - 1);
  }
  buscarProductos() {
    this.obtenerListadoProductos();
  }
  abrirModalCrearProducto() {
    const modalRef = this.modalService.show(ProductosCreateComponent, {
      class: 'modal-lg'
    });
  }
  abrirModalDeleteProducto(producto: any) {
    const initialState = {
      producto: producto
    };
    const modalRef = this.modalService.show(ProductosDeleteComponent, {
      initialState
    });
  }

}
