import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLockScreenComponent } from './core/presentacion/pages/page-lock-screen/page-lock-screen.component';
import { PageLoginComponent } from './core/presentacion/pages/page-login/page-login.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', component: PageLoginComponent },
      { path: 'lock', component: PageLockScreenComponent },
    ],
  },
  {
    path: 'tablero',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'ropa',
    loadChildren: () => import('./ropa/ropa.module').then((m) => m.RopaModule),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path: 'compra',
    loadChildren: () =>
      import('./compra/compra.module').then((m) => m.CompraModule),
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
