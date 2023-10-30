import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../model/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private baseUrl = 'http://localhost:8088/api/rdv'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getRdvByMedecins(id: String): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/all/`+id);
  }
  getExistingDatesForMedecin(id: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/existingdates/`+id);

  }
    
  create(id: String, rdv:RendezVous)  {
    
    return this.http.post(`${this.baseUrl}/ad/`+id, rdv);
  }
  deleteRdv(id:String){
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
/*
  getReclamationsTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsTraitees`);
  }

  getReclamationsNonTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsNonTraitees`);
  }


  addReclamation(formData:FormData, pieceJointe: File) {
    const params = new HttpParams().set('pieceJointe', pieceJointe ? pieceJointe.name : '');
        return this.http.post(`${this.baseUrl}/addReclamation`, formData, {params});
  }

  filter(evaluation: string, categorie: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter?evaluation=${evaluation}&categorie=${categorie}`);
  }*/

}
