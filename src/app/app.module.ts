import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSvgIconModule } from './ngx-svg-icon/ngx-svg-icon.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSvgIconModule.forRoot({ basePath: '/assets' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
