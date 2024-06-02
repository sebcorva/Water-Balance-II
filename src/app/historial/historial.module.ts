import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPageRoutingModule } from './historial-routing.module';

import { HistorialPage } from './historial.page';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPageRoutingModule,
    MatTableModule
  ],
  declarations: [HistorialPage]
})
export class HistorialPageModule {}
