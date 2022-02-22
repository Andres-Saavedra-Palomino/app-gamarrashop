import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ConfigService } from 'src/app/config/config.service';
import { UsuarioEntity } from 'src/app/usuario/dominio/usuario.entity';

@Component({
  selector: 'gam-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  group: FormGroup | any;
  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router,
    private readonly auth: AuthService
  ) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: true,
        },
        header: {
          hidden: true,
        },
      },
    };
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required),
    });
  }

  enter() {
    const user: UsuarioEntity = this.group.value;
    this.auth.login(user);
    this.router.navigate(['/tablero']);
  }
}
