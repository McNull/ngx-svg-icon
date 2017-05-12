import { Component, Input } from '@angular/core';

import { NgxSvgIconService } from './ngx-svg-icon.service'

@Component({
  selector: 'svg-icon',
  templateUrl: './ngx-svg-icon.component.html',
  styles: [`
    .icon {
      display: inline-block;
      vertical-align: middle;
      fill: currentColor;
    }
  `]
})
export class NgxSvgIcon {

  /**
   * Base path for SVG sprite
   */
  public basePath = this.config.basePath

  /**
   * Icon size
   */
  @Input('size') size = 16;

  /**
   * Symbol ID value from SVG sprite
   */
  @Input('name') name: string;

  constructor(public config: NgxSvgIconService) {}
}
