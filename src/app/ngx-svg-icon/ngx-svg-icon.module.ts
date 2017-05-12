import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxSvgIcon } from './ngx-svg-icon.component'
import { NgxSvgIconService, NgxSvgIconServiceConfig } from './ngx-svg-icon.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxSvgIcon
  ],
  providers: [
    NgxSvgIconService
  ],
  exports: [
    NgxSvgIcon
  ]
})
export class NgxSvgIconModule {
  static forRoot(basePath: NgxSvgIconServiceConfig): ModuleWithProviders {
    return {
      ngModule: NgxSvgIconModule,
      providers: [
        {
          provide: NgxSvgIconServiceConfig,
          useValue: basePath
        }
      ]
    };
  }
}
