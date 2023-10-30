import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Service/article.service';
import { Article } from 'src/app/model/Article';
import { Commentaire } from 'src/app/model/Commentaire';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  commentText: string = '';


  articles: any[];
  searchavalue:any

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getAllReclamations().subscribe((data: any[]) => {
      this.articles = data;
    });
  }
  filtrer(){
    this.articleService.getbytitle(this.searchavalue).subscribe(data=>{
      this.articles=data
    })
  }


  ajouterCommentaire(articleId: string) {
    const commentaire: Commentaire = {
      id: 'un_identifiant_unique', // Remplacez ceci par un ID réel
      article: articleId, // Utilisez l'ID de l'article spécifique
      contenu: this.commentText
      // D'autres propriétés peuvent être nécessaires ici selon votre modèle
    };

    this.articleService.ajouterCommentaire(articleId, commentaire).subscribe(
      (response) => {
        console.log('Commentaire ajouté avec succès : ', response);
        // Mettez à jour l'affichage ou réinitialisez les champs si nécessaire
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du commentaire : ', error);
        // Gérez les erreurs ici
      }
    );
  }
}






