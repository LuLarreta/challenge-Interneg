import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentasListComponent } from './ventas-list/ventas-list.component';
import { VentasCreateComponent } from './ventas-create/ventas-create.component';

const routes: Routes = [
  { path: 'ventas', component: VentasListComponent },
  { path: 'ventas/create', component: VentasCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
