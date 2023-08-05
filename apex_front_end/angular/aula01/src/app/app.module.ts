import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { TopoComponent } from './topo/topo.component';
import { Page2Component } from './pages/page2/page2.component';
import { AppRoutingModule } from './app-routing.module';
import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { Page6Component } from './pages/page6/page6.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    TopoComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page404Component,
    Page6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
