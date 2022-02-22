import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PageUsuarioComponent } from './presentacion/pages/page-usuario/page-usuario.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageUsuarioComponent],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule],
})
export class UsuarioModule {}
