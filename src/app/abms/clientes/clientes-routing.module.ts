import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientesListComponent } from './clientes-list/clientes-list.component';


const routes: Routes = [
  { path: 'clientes', component: ClientesListComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
