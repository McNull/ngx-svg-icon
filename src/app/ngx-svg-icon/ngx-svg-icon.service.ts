import { Injectable, Optional } from '@angular/core';

/**
 * SVG icon service configuration
 */
export class NgxSvgIconServiceConfig {
  public basePath: string;
}

/**
 * SVG icon service
 */
@Injectable()
export class NgxSvgIconService {

  /**
   * Base path for SVG sprite
   */
  private path: string = '/assets';

  constructor( @Optional() config: NgxSvgIconServiceConfig) {
    this.path = config ? config.basePath : '/assets'
  }

  /**
   * Get base path
   */
  get basePath(): string {
    return this.path;
  }
}
