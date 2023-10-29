import { ServiceProduit } from 'src/app/Service/produits.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  constructor(private serviceProduit:ServiceProduit,private route:Router) { }

  ngOnInit(): void {
  }
  addproduct(p:any){
    this.serviceProduit.addproduct(p).subscribe( data => {

        this.route.navigate(['/backoffice/produit']);
      }
    ,
    error => {

      this.route.navigate(['/backoffice/produit']);
      console.error(error);
    })
  }
}
