import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxeadoresPage } from './boxeadores.page';
import { RingPage } from '../ring/ring.page';

const routes: Routes = [
  {
    path: '',
    component: BoxeadoresPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxeadoresPageRoutingModule {}
