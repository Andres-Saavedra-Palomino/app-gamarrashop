import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'gam-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly router: Router
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
  ngOnInit(): void {}
  lock() {
    this.router.navigate(['/auth', 'lock']);
  }
  logout() {
    this.router.navigate(['/auth']);
  }
}
