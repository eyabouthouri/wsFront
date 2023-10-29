import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  private baseUrl = 'http://localhost:8088/api/medecins'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllMedecins(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/all`);
  }



}
