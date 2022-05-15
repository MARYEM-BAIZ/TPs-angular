  // cette class produit le nom et le prénom d'une personne

  export class Personne {

    private _nom: string;
    private _prenom: string;

    constructor(_nom: string, _prenom: string){
      this._nom = _nom;
      this._prenom = _prenom;
    }

    get nom(){
      return this._nom;
    }

    set nom(_nom: string){
      this._nom = _nom;
    }

    get prenom(){
      return this._prenom;
    }

    set prenom(_prenom: string){
      this._prenom = _prenom;
    }
  }
