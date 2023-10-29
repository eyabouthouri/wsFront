import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReponseService } from 'src/app/Service/reponse.service';
import { Reponse } from 'src/app/model/reponses';

@Component({
  selector: 'app-affichreponse',
  templateUrl: './affichreponse.component.html',
  styleUrls: ['./affichreponse.component.css']
})
export class AffichreponseComponent implements OnInit {
  reponse: Reponse;
  reclamationId: string;

  constructor(
    private reponseService: ReponseService,
    private activatedRoute: ActivatedRoute  ) {}
  ngOnInit(): void {

    const fullReclamationId = this.activatedRoute.snapshot.paramMap.get('id');
    // Supprimez la partie jusqu'à '4' inclus et commencez juste après
    this.reclamationId = fullReclamationId.substring(fullReclamationId.indexOf('4') + 1);
    this.loadReponseByReclamationId();
  }

  loadReponseByReclamationId(): void {
    this.reponseService.getReponseByReclamationId(this.reclamationId)
      .subscribe(
        data => {
          console.log("Data received from API:", data);
          this.reponse = data;
        },
        error => {
          console.error('Erreur lors de la récupération de la réponse:', error);
        }
      );
    console.log("reclamationId:", this.reclamationId);
}


}
