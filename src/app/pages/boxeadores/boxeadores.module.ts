import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxeadoresPageRoutingModule } from './boxeadores-routing.module';

import { BoxeadoresPage } from './boxeadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxeadoresPageRoutingModule
  ],
  declarations: [BoxeadoresPage]
})
export class BoxeadoresPageModule {}
