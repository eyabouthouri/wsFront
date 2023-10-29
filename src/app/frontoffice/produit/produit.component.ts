import { ServiceProduit } from './../../Service/produits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private serviceProduit:ServiceProduit) { }
   listproduit:any
   searchavalue:any
  ngOnInit(): void {
    this.serviceProduit.getAllproduitnonperime().subscribe(data=>{
      this.listproduit=data
    })
  }
  filtrer(){
    this.serviceProduit.getProductByName(this.searchavalue).subscribe(data=>{
      this.listproduit=data
    })
  }

}
