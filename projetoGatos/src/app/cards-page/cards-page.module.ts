import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPagePageRoutingModule } from './cards-page-routing.module';

import { CardsPagePage } from './cards-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPagePageRoutingModule,
  ],
  declarations: [CardsPagePage]
})
export class CardsPagePageModule {}
