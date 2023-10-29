import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReponseService } from 'src/app/Service/reponse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  reponseForm: FormGroup;
  reclamationId: string;

  constructor(
    private reponseService: ReponseService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const fullReclamationId = this.activatedRoute.snapshot.paramMap.get('id');
    // Supprimez la partie jusqu'à '4' inclus et commencez juste après
    this.reclamationId = fullReclamationId.substring(fullReclamationId.indexOf('4') + 1);
    this.reponseForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
}




  onSubmit() {
    if (this.reponseForm.valid) {
      this.reponseService.addReponseToReclamation(this.reclamationId, this.reponseForm.value)
        .subscribe(response => {
          console.log('Reponse ajoutée avec succès !', response);
          // Redirigez ou affichez un message de succès si nécessaire
        }, error => {
          console.error('Erreur lors de l\'ajout de la reponse:', error);
        });
    } else {
      // Affichez un message d'erreur ou traitez l'erreur comme vous le souhaitez
    }
    console.log("reclamationId:", this.reclamationId);
  }
}
