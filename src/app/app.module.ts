  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { EtudiantService } from './etudiant.service';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { TP1Component } from './tp1/tp1.component';
  import { Tp2Component } from './tp2/tp2.component';
import { TP3Component } from './tp3/tp3.component';
import { TP4Component } from './tp4/tp4.component';
import { TP5Component } from './tp5/tp5.component';
import { TP6Component } from './tp6/tp6.component';

  @NgModule({
    declarations: [
      AppComponent,
      TP1Component,
      Tp2Component,
      TP3Component,
      TP4Component,
      TP5Component,
      TP6Component
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [EtudiantService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
