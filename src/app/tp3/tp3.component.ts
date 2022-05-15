import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp3',
  templateUrl: './tp3.component.html',
  styleUrls: ['./tp3.component.css']
})
export class TP3Component implements OnInit {

  tab: number[] = [19,19.5,19.75,20];

  numbers: number[] = [9,19.5,12,15];

  AfficheColor: boolean = false

  constructor() { }

  public changeColor() : void{
    this.AfficheColor =! this.AfficheColor;
  }

  ngOnInit(): void {}

}
