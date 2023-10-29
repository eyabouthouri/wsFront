import { Component, OnInit } from '@angular/core';
import { ServiceProduit } from 'src/app/Service/produits.service';

@Component({
  selector: 'app-produitback',
  templateUrl: './produitback.component.html',
  styleUrls: ['./produitback.component.css']
})
export class ProduitbackComponent implements OnInit {
  constructor(private serviceProduit:ServiceProduit) { }
  listproduit:any
  searchavalue:any
 ngOnInit(): void {
   this.serviceProduit.getallproduct().subscribe(data=>{
     this.listproduit=data
   })
 }
 filtrer(){
   this.serviceProduit.getProductByName(this.searchavalue).subscribe(data=>{
     this.listproduit=data
   })
 }


}
