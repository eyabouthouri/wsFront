import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = 'http://localhost:8088/api/articles'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getAllReclamations(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/all`);
  }

  getbytitle(title:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/get/`+title);

  }

  addarticle(article:any){
    return this.http.post(`${this.baseUrl}/add`,article)
  }

}
