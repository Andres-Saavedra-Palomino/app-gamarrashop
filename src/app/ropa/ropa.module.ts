import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RopaOperation } from './infraestructura/ropa.operation';
import { RopaUseCase } from './aplicacion/ropa.usecase';
import { RopaOperationRepository } from './aplicacion/ropa-operation.repository';
import { HttpClientModule } from '@angular/common/http';
import { PageRopaComponent } from './presentacion/paginas/page-ropa/page-ropa.component';
import { RopaRoutingModule } from './ropa-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormRopaComponent } from './presentacion/vistas/form-ropa/form-ropa.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageRopaComponent, FormRopaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RopaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [PageRopaComponent],
  providers: [
    RopaUseCase,
    { provide: RopaOperationRepository, useClass: RopaOperation },
  ],
})
export class RopaModule {}
