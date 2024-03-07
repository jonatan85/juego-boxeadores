import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RingPageRoutingModule } from './ring-routing.module';

import { RingPage } from './ring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RingPageRoutingModule
  ],
  declarations: [RingPage]
})
export class RingPageModule {}
