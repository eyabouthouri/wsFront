import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduit {
  private baseUrl = 'http://localhost:8088/api/produit'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllproduitnonperime(): Observable<any> {

    return this.http.get(`${this.baseUrl}/produitnonperime`);
  }
  getProductByName(nom:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/get/`+nom);

  }
  getallproduct(): Observable<any> {

    return this.http.get(`${this.baseUrl}/all`);
  }
  addproduct(produit:any){
    return this.http.post(`${this.baseUrl}/add`,produit)
  }

}
