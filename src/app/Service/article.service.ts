import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:8088/api/commentaires'; // Remplacez ceci par l'URL correcte de votre API

  private baseUrl = 'http://localhost:8088/api/articles'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllReclamations(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/all`);
  }

  addarticle(article:any){
    return this.http.post(`${this.baseUrl}/add`,article)
  }
  getbytitle(title:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/get/`+title);

  }
  ajouterCommentaire(articleId: string, commentaire: Commentaire): Observable<string> {
    const url = `${this.apiUrl}/add/${articleId}`;
    return this.http.post<string>(url, commentaire);
  }
}
