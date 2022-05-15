import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp4',
  templateUrl: './tp4.component.html',
  styleUrls: ['./tp4.component.css']
})
export class TP4Component implements OnInit {

  public dateAujourd : Date = new Date();

  public nombre : number = 0;

  public message : string = "";

  constructor() { }

  ngOnInit(): void {

    this.dateAujourd = new Date();
    this.nombre = 100;
    this.message = "Bonjour tout le monde";

  }

}
