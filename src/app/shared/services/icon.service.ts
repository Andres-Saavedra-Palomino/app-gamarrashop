import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface IIcon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private listIcons: IIcon[] = [
    { name: 'logo', path: '../assets/icons/boutique.svg' },
    { name: 'sinfoto', path: '../assets/icons/user.svg' },
    { name: 'usuario', path: '../assets/icons/team.svg' },
    { name: 'ropa', path: '../assets/icons/shirts.svg' },
    { name: 'tablero', path: '../assets/icons/computer.svg' },
  ];
  constructor(
    private readonly maticon: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    this.registryIcons();
  }
  registryIcons(): void {
    this.listIcons.forEach((icon: IIcon) => {
      this.maticon.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
