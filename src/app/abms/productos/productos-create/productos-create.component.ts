import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ProductosService } from '../productos.service';
import { RubrosService } from '../../rubros/rubros.service';

@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.component.html',
  styleUrls: ['./productos-create.component.css'],
})
export class ProductosCreateComponent {
  @Output() productoCreado = new EventEmitter<any>();

  producto = {
    id: '',
    nombre: '',
    codigo: '',
    precio: 0.0,
    rubro_id: null
  };

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
    private bsModalRef: BsModalRef,
    private rubrosService: RubrosService
  ) {}

  crearProducto(): void {
    this.productosService.crearProducto(this.producto).subscribe(
      () => {
        this.productoCreado.emit();
        location.reload();
      },
      (error) => {
        console.error('Error al crear producto:', error);
      }
    );
  }
  cerrarModal() {
    this.bsModalRef.hide();
  }
  
}
