import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/Service/article.service';

@Component({
  selector: 'app-articlesadd',
  templateUrl: './articlesadd.component.html',
  styleUrls: ['./articlesadd.component.css']
})
export class ArticlesaddComponent implements OnInit {
  constructor(private serviceArticle:ArticleService,private route:Router) { }


  ngOnInit(): void {
  }
  addproduct(p:any){
    this.serviceArticle.addarticle(p).subscribe( data => {

        this.route.navigate(['/backoffice/listarticles']);
      }
    ,
    error => {

      this.route.navigate(['/backoffice/listarticles']);
      console.error(error);
    })
  }

}
