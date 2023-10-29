import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Service/article.service';

@Component({
  selector: 'app-articleslist',
  templateUrl: './articleslist.component.html',
  styleUrls: ['./articleslist.component.css']
})
export class ArticleslistComponent implements OnInit {

  articles: any[];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllReclamations().subscribe((data: any[]) => {
      this.articles = data;
    });
  }


}
