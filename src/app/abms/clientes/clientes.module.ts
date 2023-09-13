import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesDeleteComponent } from './clientes-delete/clientes-delete.component';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';


@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesDeleteComponent,
    ClientesCreateComponent,


  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
})
export class ClientesModule {}
