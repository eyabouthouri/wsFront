import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'http://localhost:8088/api/reclamations'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllReclamations(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/all`);
  }
  searchByTitle(title: string): Observable<any[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/search/${title}`);
  }
  sortReclamationsByDateAsc(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/sortc`);
  }
  addReclamation(reclamation: Reclamation): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, reclamation);
  }
/*
  getReclamationsTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsTraitees`);
  }

  getReclamationsNonTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsNonTraitees`);
  }

  deleteReclamation(id:number){
    return this.http.delete(`${this.baseUrl}/deleteReclamation/${id}`);
  }

  addReclamation(formData:FormData, pieceJointe: File) {
    const params = new HttpParams().set('pieceJointe', pieceJointe ? pieceJointe.name : '');
        return this.http.post(`${this.baseUrl}/addReclamation`, formData, {params});
  }

  filter(evaluation: string, categorie: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter?evaluation=${evaluation}&categorie=${categorie}`);
  }*/


}
