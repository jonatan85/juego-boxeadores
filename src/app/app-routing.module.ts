import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'boxeadores',
    loadChildren: () => import('./pages/boxeadores/boxeadores.module').then( m => m.BoxeadoresPageModule)
  },
  {
    path: 'formulario-crear',
    loadChildren: () => import('./pages/formulario-crear/formulario-crear.module').then( m => m.FormularioCrearPageModule)
  },
  {
    path: 'ring/:boxeador',
    loadChildren: () => import('./pages/ring/ring.module').then( m => m.RingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
