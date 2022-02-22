import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRopaComponent } from './presentacion/paginas/page-ropa/page-ropa.component';

const routes: Routes = [
  {
    path: '',
    component: PageRopaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopaRoutingModule {}
