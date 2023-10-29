import { identifierName } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { error } from 'console';
import { ServiceCommande } from 'src/app/Service/commande.service';
import { ServiceProduit } from 'src/app/Service/produits.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  @Input() openModel : boolean =true;
  @Input() idFormation : any ;
  idprod:any;
  inscriptiontermine:boolean=false
  constructor(private commandeservice:ServiceCommande) { }

  ngOnInit(): void {
  }
  commander(commande:any){

    this.idprod = this.idFormation.substring(this.idFormation.indexOf('4') + 1);
    console.log(this.idprod)
    console.log(commande)
    this.commandeservice.addcommande(commande,this.idprod).subscribe(
      data => {

      }
    ,
    error => {


      console.error(error);
    })


  }

}
