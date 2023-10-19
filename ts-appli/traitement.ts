import { Personne } from './personne';
import { Adresse } from './adresse';

class Enseignant extends Personne {
  specialite: string;
  statut: string;

  constructor(nom: string, prenom: string, adresse: Adresse, specialite: string, statut: string) {
    super(nom, prenom, adresse);
    this.specialite = specialite;
    this.statut = statut;
  }
}

const adresse1 = new Adresse('44 rue lord kitchener', 'Le Havre', '77100');
const personne1 = new Personne('Leroux', 'Marceau', adresse1);
const enseignant1 = new Enseignant('Smith', 'Jane', adresse1, 'Maths', 'present');

console.log(adresse1);
console.log(personne1);
console.log(enseignant1);
