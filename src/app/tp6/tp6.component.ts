import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-tp6',
  templateUrl: './tp6.component.html',
  styleUrls: ['./tp6.component.css']
})
export class TP6Component implements OnInit {

  public emodel: any= {};

  public esource: Array<any>;

  constructor(private eservice: EtudiantService) {

    this.esource = this.eservice.getEtudiantData();

  }

  ngOnInit(): void { }

  private validate(): boolean {

    let status: boolean = true;

    if (typeof (this.emodel.nom) === "undefined") {

      alert('champ nom est vide');

      status = false;

      return status;

    }

    else if (typeof (this.emodel.prenom) === 'undefined') {

      alert('champ prénom est vide');

      status = false;

      return status;

    }

    else if (typeof (this.emodel.ville) === 'undefined') {

      alert('champ ville est vide');

      status = false;

      return status;

    }

    return status;

  }

  public reset(): void {

    this.emodel = {};

  }

  public submit(): void {

    if (this.validate()) {

      this.eservice.ajouterEtudiantData(this.emodel);

      this.reset();

    }

  }

}
