import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private etudiantList: Array<any> = [];

  constructor() {

    this.etudiantList = [{nom: 'Baiz', prenom: 'Maryem', ville:'Rabat'}];

  }

  getEtudiantData(): Array<any> {
    return this.etudiantList;
  }

  ajouterEtudiantData(item : any): void{
    this.etudiantList.push(item);
  }

}
