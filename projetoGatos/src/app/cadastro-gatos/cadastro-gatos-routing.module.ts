import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGatosPage } from './cadastro-gatos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroGatosPageRoutingModule {}
