import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClientesListComponent } from './abms/clientes/clientes-list/clientes-list.component';
import { RubrosListComponent } from './abms/rubros/rubros-list/rubros-list.component';
import { ProductosListComponent } from './abms/productos/productos-list/productos-list.component';
import { VentasCreateComponent } from './ventas/ventas-create/ventas-create.component';
import { VentasListComponent } from './ventas/ventas-list/ventas-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'rubros', component: RubrosListComponent},
  { path: 'productos', component: ProductosListComponent},
  { path: 'ventas', component: VentasListComponent},
  { path: 'ventas/create', component: VentasCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
