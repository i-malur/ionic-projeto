import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cards-page',
    loadChildren: () => import('./cards-page/cards-page.module').then( m => m.CardsPagePageModule)
  },

  {
    path: 'cadastro-gatos',
    loadChildren: () => import('./cadastro-gatos/cadastro-gatos.module').then( m => m.CadastroGatosPageModule)
  },
  {
    path: 'curiosidade',
    loadChildren: () => import('./curiosidade/curiosidade.module').then( m => m.CuriosidadePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
