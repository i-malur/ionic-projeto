import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CuriosidadePageRoutingModule } from './curiosidade-routing.module';
import { CuriosidadePage } from './curiosidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuriosidadePageRoutingModule,
    RouterModule
  ],
  declarations: [
    CuriosidadePage
  ]
})
export class CuriosidadePageModule {}