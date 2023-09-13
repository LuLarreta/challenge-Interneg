import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosCreateComponent } from './productos-create/productos-create.component';
import { ProductosDeleteComponent } from './productos-delete/productos-delete.component';


@NgModule({
  declarations: [
    ProductosListComponent,
    ProductosCreateComponent,
    ProductosDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
