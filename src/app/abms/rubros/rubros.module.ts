import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RubrosRoutingModule } from './rubros-routing.module';
import { RubrosListComponent } from './rubros-list/rubros-list.component';
import { RubrosCreateComponent } from './rubros-create/rubros-create.component';
import { RubrosDeleteComponent } from './rubros-delete/rubros-delete.component';


@NgModule({
  declarations: [
    RubrosListComponent,
    RubrosCreateComponent,
    RubrosDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RubrosRoutingModule
  ]
})
export class RubrosModule { }
