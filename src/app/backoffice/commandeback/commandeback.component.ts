import { Component, OnInit } from '@angular/core';
import { ServiceCommande } from 'src/app/Service/commande.service';

@Component({
  selector: 'app-commandeback',
  templateUrl: './commandeback.component.html',
  styleUrls: ['./commandeback.component.css']
})
export class CommandebackComponent implements OnInit {

  constructor(private serviceProduit:ServiceCommande) { }
  listcommande:any
  searchavalue:any
 ngOnInit(): void {
   this.serviceProduit.getAllcommandes().subscribe(data=>{
     this.listcommande=data
     console.log(data)
   })
 }
}
