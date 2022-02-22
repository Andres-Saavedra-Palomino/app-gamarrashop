import { Component, OnInit } from '@angular/core';
import { RopaUseCase } from 'src/app/ropa/aplicacion/ropa.usecase';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormRopaComponent } from '../../vistas/form-ropa/form-ropa.component';
import { RopaEntity } from 'src/app/ropa/dominio/ropa.entity';
import mocksRopa from '../../../mocks/mockropa.json';
import mocksRopaMetadata from '../../../mocks/mockropa-metadata.json';
import { ConfigService } from 'src/app/config/config.service';
import { map } from 'lodash';

@Component({
  selector: 'gam-page-ropa',
  templateUrl: './page-ropa.component.html',
  styleUrls: ['./page-ropa.component.css'],
})
export class PageRopaComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = mocksRopaMetadata;
  data: RopaEntity[] = [];
  totalRecords: number = 0;
  constructor(
    private readonly ropauc: RopaUseCase,
    private readonly utils: UtilsService,
    private readonly configService: ConfigService
  ) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: false,
        },
        header: {
          hidden: false,
        },
      },
    };
  }

  ngOnInit(): void {
    this.list(0);
  }

  list(page: number) {
    //this.ropauc.getAll().subscribe(console.log, console.log);
    this.totalRecords = mocksRopa.length;
    this.data = mocksRopa.slice(page * 8, page * 8 + 8);
  }
  openForm(row: any = null) {
    this.utils.openModal(FormRopaComponent, {
      disableClose: true,
      panelClass: 'container-modal',
      data: row,
    });
  }
  changePage(page: number) {
    this.list(page);
  }
  formatNumber(n: number): string {
    return 'S/.' + (Math.round(n * 100) / 100).toFixed(2);
  }
}
