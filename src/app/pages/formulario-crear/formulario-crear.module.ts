import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioCrearPageRoutingModule } from './formulario-crear-routing.module';

import { FormularioCrearPage } from './formulario-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormularioCrearPageRoutingModule
  ],
  declarations: [FormularioCrearPage]
})
export class FormularioCrearPageModule {}
