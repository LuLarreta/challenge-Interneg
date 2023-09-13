import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent {
  @Output() clienteCreado = new EventEmitter<any>();
 
  cliente = {
    id: '',
    nombre: '',
    cuit: '',
    email: '',
    domicilio: '',
    telefono: ''
  };

  constructor(private clientesService: ClientesService, private bsModalRef: BsModalRef) {}

  crearCliente(): void {
    this.clientesService.crearCliente(this.cliente)
      .subscribe(
        () => {
          this.clienteCreado.emit();
        },
        (error) => {
          console.error('Error al crear cliente:', error);
        }
      );
  }
 cerrarModal() {
            this.bsModalRef.hide();
          }

}