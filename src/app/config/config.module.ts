import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config } from './layer.interface';
import { AMB_CONFIG } from './token';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ConfigModule {
  static forRoot(config: Config): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: AMB_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
