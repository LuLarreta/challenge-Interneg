import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { RubrosService } from '../rubros.service';

@Component({
  selector: 'app-rubros-delete',
  templateUrl: './rubros-delete.component.html',
  styleUrls: ['./rubros-delete.component.css']
})
export class RubrosDeleteComponent {
  @Input() rubro: any;
  @Output() confirmarEliminar = new EventEmitter<boolean>(); 

  constructor(
    private rubrosService: RubrosService,
    public bsModalRef: BsModalRef
  ) {}

     // eliminar rubro
     confirmarEliminacion() {
      this.rubrosService.eliminarRubro(this.rubro.id).subscribe(
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