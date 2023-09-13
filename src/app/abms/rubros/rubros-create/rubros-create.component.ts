import { Component, EventEmitter, Output  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { RubrosService } from '../rubros.service';

@Component({
  selector: 'app-rubros-create',
  templateUrl: './rubros-create.component.html',
  styleUrls: ['./rubros-create.component.css']
})
export class RubrosCreateComponent {

  @Output() rubroCreado = new EventEmitter<any>();

  rubro = {
    id: '',
    nombre: '',
    codigo: '',
  }

  constructor(private rubrosService: RubrosService, private bsModalRef: BsModalRef) {}
  crearRubro(): void {
    this.rubrosService.crearRubro(this.rubro)
      .subscribe(
        () => {
          this.rubroCreado.emit();
          location.reload();
        },
        (error) => {
          console.error('Error al crear rubro:', error);
        }
      );
  }
  cerrarModal() {
    this.bsModalRef.hide();
  }
 
} 
