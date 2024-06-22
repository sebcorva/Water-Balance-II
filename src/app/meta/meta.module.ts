import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MetaPageRoutingModule } from './meta-routing.module';
import { MetaPage } from './meta.page';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaPageRoutingModule,
    DatePipe
  ],
  declarations: [MetaPage]
})
export class MetaPageModule {}
