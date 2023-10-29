import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCommande {
  private baseUrl = 'http://localhost:8088/api/produit'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllcommandes(): Observable<any> {

    return this.http.get(`${this.baseUrl}/allcommande`);
  }

  addcommande(commande:any,id:any){
    return this.http.post(`${this.baseUrl}/addcommande/`+id,commande)
  }


}
