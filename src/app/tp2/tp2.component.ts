  import { Component, OnInit } from '@angular/core';
  import { Personne } from '../classes/personne';

  @Component({
    selector: 'app-tp2',
    templateUrl: './tp2.component.html',
    styleUrls: ['./tp2.component.css']
  })

  export class Tp2Component implements OnInit {

    personne: Personne = new Personne('Baiz','Maryem');

    tab: number[] = [19,19.5,19.75,20];

    direBonjour(): string {
      return 'Bonjour tout le monde'
    }

    public value: number = 20;

    public AfficherAlert() : void{
      console.log('Bouton clicked');
      alert('Déclanchement d évenement')
    }

    public value1: string = "";






    constructor() { }

    ngOnInit(): void {}

  }
