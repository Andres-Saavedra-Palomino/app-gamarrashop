import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu } from '../../services/menu.interface';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'gam-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
})
export class TituloComponent implements OnInit {
  path: Partial<IMenu>;

  constructor(
    private readonly rutaActiva: ActivatedRoute,
    private readonly menuService: MenuService
  ) {
    const rutaActual =
      '/' + this.rutaActiva.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getDataPath(rutaActual);
  }

  ngOnInit(): void {}
}
