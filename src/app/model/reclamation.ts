import { Reponse } from "./reponses";

export class Reclamation {
  idReclamation: number;
  title: string;
  etat: EtatReclamation;
  description: string;
  dateSoumission: Date;
}

export enum EtatReclamation {
  TRAITE = "TRAITE",
  NON_TRAITE = "NON_TRAITE"
}
