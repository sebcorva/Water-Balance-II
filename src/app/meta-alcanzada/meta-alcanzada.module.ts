import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaAlcanzadaPageRoutingModule } from './meta-alcanzada-routing.module';

import { MetaAlcanzadaPage } from './meta-alcanzada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaAlcanzadaPageRoutingModule
  ],
  declarations: [MetaAlcanzadaPage]
})
export class MetaAlcanzadaPageModule {}
