import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioEntity } from '../usuario/dominio/usuario.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(user: UsuarioEntity) {
    this.http
      .post(`${environment.pathAPI}/users/login`, {
        correo: user.correo,
        password: user.contrasena,
      })
      .subscribe((data) => console.log(data));
  }
}
