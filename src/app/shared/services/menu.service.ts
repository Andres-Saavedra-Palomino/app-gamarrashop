import { Injectable } from '@angular/core';
import { IMenu } from './menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Resumen', url: '/tablero', icon: 'tablero' },
    { title: 'Usuarios', url: '/usuario', icon: 'usuario' },
    { title: 'Ropa', url: '/ropa', icon: 'ropa' },
  ];
  constructor() {}

  getListMenu(): IMenu[] {
    return this.listMenu;
  }
  getDataPath(path: string): Partial<IMenu> {
    const elementoEncontrado: any = this.listMenu.find(
      (e) => path.toLowerCase().indexOf(e.url.toLowerCase()) > -1
    );

    return { title: elementoEncontrado.title, icon: elementoEncontrado.icon };
  }
}
