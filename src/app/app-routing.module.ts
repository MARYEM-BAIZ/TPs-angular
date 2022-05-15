import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TP1Component } from './tp1/tp1.component';
import { Tp2Component } from './tp2/tp2.component';
import { TP3Component } from './tp3/tp3.component';
import { TP4Component } from './tp4/tp4.component';
import { TP5Component } from './tp5/tp5.component';
import { TP6Component } from './tp6/tp6.component';

const routes: Routes = [
  { path: 'tp1', component: TP1Component, },
  { path: 'tp2', component: Tp2Component, },
  { path: 'tp3', component: TP3Component, },
  { path: 'tp4', component: TP4Component, },
  { path: 'tp5', component: TP5Component, },
  { path: 'tp6', component: TP6Component, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
