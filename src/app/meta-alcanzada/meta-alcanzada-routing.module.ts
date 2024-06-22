import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaAlcanzadaPage } from './meta-alcanzada.page';

const routes: Routes = [
  {
    path: '',
    component: MetaAlcanzadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaAlcanzadaPageRoutingModule {}
