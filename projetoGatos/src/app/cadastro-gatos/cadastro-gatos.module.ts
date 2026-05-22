import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroGatosPageRoutingModule } from './cadastro-gatos-routing.module';
import { CadastroGatosPage } from './cadastro-gatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroGatosPageRoutingModule
  ],
  declarations: [CadastroGatosPage]
})
export class CadastroGatosPageModule {}
