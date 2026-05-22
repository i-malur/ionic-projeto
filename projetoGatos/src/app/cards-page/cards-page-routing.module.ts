import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPagePage } from './cards-page.page';

const routes: Routes = [
  {
    path: '',
    component: CardsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPagePageRoutingModule {}
