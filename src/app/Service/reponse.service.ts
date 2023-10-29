import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from '../model/reponses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  private baseUrl = 'http://localhost:8088/api/reponses'; // Replace with your backend URL

  constructor(private http: HttpClient) { }


  addReponseToReclamation(reclamationId: string, reponseData: any) {
    const url = `${this.baseUrl}/ad/${reclamationId}`;
    return this.http.post(url, reponseData);
  }

  getReponseByReclamationId(reclamationId: string): Observable<Reponse> {
    const url = `${this.baseUrl}/byReclamation/${reclamationId}`;
    return this.http.get<Reponse>(url);
  }

}
