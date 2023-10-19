import { Adresse } from './adresse';

class Personne {
  nom: string;
  prenom: string;
  adresse: Adresse;

  constructor(nom: string, prenom: string, adresse: Adresse) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
  }
}

export { Personne };
