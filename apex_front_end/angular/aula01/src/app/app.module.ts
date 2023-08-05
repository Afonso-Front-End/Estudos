import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ARoutingModule } from './a--routing.module';
import { Page1Component } from './pages/page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    ARoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
