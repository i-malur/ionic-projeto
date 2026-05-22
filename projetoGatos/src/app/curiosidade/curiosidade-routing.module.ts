import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuriosidadePage } from './curiosidade.page';

const routes: Routes = [
  {
    path: '',
    component: CuriosidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuriosidadePageRoutingModule {}
