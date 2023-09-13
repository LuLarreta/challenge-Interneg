import { Component, EventEmitter, Output   } from '@angular/core';

import { VentasService } from '../ventas.service';
import { ProductosService } from '../../abms/productos/productos.service';


@Component({
  selector: 'app-ventas-create',
  templateUrl: './ventas-create.component.html',
  styleUrls: ['./ventas-create.component.css']
})
export class VentasCreateComponent {
  @Output() ventaCreada = new EventEmitter<any>();

  venta = {
    fecha: '',
    cliente_id: '',
    importe_total: '',
    observaciones: '',
    items: [],
  }
  productos: any[] = [];
  searchString: string = '';

  constructor(private ventasService: VentasService, private productosService: ProductosService) {}
  
  buscarProductos(): void {
    if (this.searchString.trim() !== '') {
      this.productosService.getListadoProductos(this.searchString).subscribe((result) => {
        this.productos = result;
      });
    } else {
      this.productos = [];
    }
  }

  agregarProducto(producto: any): void {

    const productoExistente = this.productos.find((p) => p.id === producto.id);
  
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      this.productos.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1, 
      });
    }
  }

  crearVenta() {
    this.ventasService.crearVenta(this.venta).subscribe(
      (response) => {
        console.log('Venta creada exitosamente:', response);
        this.ventaCreada.emit();
        location.reload();
      },
      (error) => {
        console.error('Error al crear venta:', error);
      }
    );
  }

  

}
