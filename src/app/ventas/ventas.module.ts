import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasListComponent } from './ventas-list/ventas-list.component';
import { VentasCreateComponent } from './ventas-create/ventas-create.component';


@NgModule({
  declarations: [
    VentasListComponent,
    VentasCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
