import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ProductosService } from '../productos.service';
import { RubrosService } from '../../rubros/rubros.service';

@Component({
  selector: 'app-productos-delete',
  templateUrl: './productos-delete.component.html',
  styleUrls: ['./productos-delete.component.css']
})
export class ProductosDeleteComponent {
  @Input() producto: any;
  @Output() confirmarEliminar = new EventEmitter<boolean>();

  rubros: any[] = [];

  ngOnInit(): void {
    this.obtenerListadoRubros();
  }
  obtenerListadoRubros(): void {
    this.rubrosService
      .getListadoRubros()
      .subscribe((response: any) => {
        this.rubros = response.data;
      });
  }
  constructor(
    private productosService: ProductosService,
    public bsModalRef: BsModalRef,
    private rubrosService: RubrosService
  ) {}
  // eliminar rubro
  confirmarEliminacion() {
    this.productosService.eliminarProducto(this.producto.id).subscribe(
      () => {
        this.confirmarEliminar.emit(true);
        this.bsModalRef.hide(); 
        location.reload();
      },
      error => {
        console.error('Error al eliminar el rubro:', error);
        this.confirmarEliminar.emit(false);
        this.bsModalRef.hide(); 
      }
    );
  }
  cancelarEliminacion() {
    this.confirmarEliminar.emit(false);
    this.bsModalRef.hide();
  }
  



}
