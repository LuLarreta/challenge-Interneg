import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductosListComponent } from './productos-list/productos-list.component';

const routes: Routes = [
  {path: 'productos', component: ProductosListComponent}
];

@NgModule({
  imports: [CommonModule ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
