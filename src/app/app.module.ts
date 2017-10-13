import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DotComponent } from './dot/dot.component';
import { ShapeComponent } from './shape/shape.component';

@NgModule({
  declarations: [
    AppComponent,
    DotComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
