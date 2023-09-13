import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RubrosListComponent } from './rubros-list/rubros-list.component';

const routes: Routes = [{ path: 'rubros', component: RubrosListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubrosRoutingModule {}
