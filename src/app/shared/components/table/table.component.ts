import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { IMetaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'gam-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() metaDataColumns: IMetaDataColumn[] = [];
  //
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef:
    | QueryList<MatColumnDef>
    | undefined;
  //
  dataSource: any = [];
  listFields: string[] = [];
  //
  @Input() total: number = 0;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataColumns.map((e) => e.field);
    this.loadData();
  }
  ngOnChanges() {
    this.loadData();
  }
  loadData() {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  ngAfterContentInit(): void {
    if (!this.columnsDef) return;

    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));

    if (this.columnsDef.length) this.listFields.push('actions');
  }
  handlerPage(evt: any) {
    this.onChangePage.emit(evt.pageIndex);
  }
}
