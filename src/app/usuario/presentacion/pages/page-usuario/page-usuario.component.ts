import { Component, OnInit } from '@angular/core';
import { IMetaDataColumn } from 'src/app/shared/interfaces/metadatacolumn.interface';

@Component({
  selector: 'gam-page-usuario',
  templateUrl: './page-usuario.component.html',
  styleUrls: ['./page-usuario.component.css'],
})
export class PageUsuarioComponent implements OnInit {
  metaDataColumns: IMetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Nombre' },
    { field: 'lastname', title: 'Apellido' },
  ];
  data: any[] = [
    { id: 1, name: 'Andres', lastname: 'Saavedra' },
    { id: 2, name: 'Andres', lastname: 'Saavedra' },
    { id: 3, name: 'Andres', lastname: 'Saavedra' },
    { id: 4, name: 'Andres', lastname: 'Saavedra' },
    { id: 5, name: 'Andres', lastname: 'Saavedra' },
    { id: 6, name: 'Andres', lastname: 'Saavedra' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
