import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent {
  @Input() cliente: any; // Recibir el cliente a eliminar desde el componente padre
  @Output() confirmarEliminar = new EventEmitter<boolean>();

  constructor(
    private clientesService: ClientesService,
    public bsModalRef: BsModalRef
  ) {}

    // eliminar cliente
  confirmarEliminacion() {
    this.clientesService.eliminarCliente(this.cliente.id).subscribe(
      () => {
        this.confirmarEliminar.emit(true);
        this.bsModalRef.hide(); 
        location.reload();
      },
      error => {
        console.error('Error al eliminar el cliente:', error);
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