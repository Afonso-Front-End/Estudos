import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

import { Page3Component } from './pages/page3/page3.component';
import { Page4Component } from './pages/page4/page4.component';
import { Page5Component } from './pages/page5/page5.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page6Component } from './pages/page6/page6.component';

 const routes: Routes = [
  {path:'page1', component: Page1Component},
  {path:'page2', component: Page2Component},
  {path:'page3', component: Page3Component},
  {path:'page4', component: Page4Component},
  {path:'page5', component: Page5Component},
  {path:'page6', component: Page6Component},
  {path:'', redirectTo:'/page1', pathMatch:'full'},
  {path:'**', component: Page404Component}
 ]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }