import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioCrearPage } from './formulario-crear.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioCrearPageRoutingModule {}
