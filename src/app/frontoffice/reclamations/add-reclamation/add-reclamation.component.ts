import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamationForm: FormGroup;  // Ajout du formulaire réactif

  constructor(private fb: FormBuilder, private reclamationService: ReclamationService, private route: Router) { 
    // Initialisation du formulaire
    this.reclamationForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const formData = this.reclamationForm.value;
    
    const newReclamation = new Reclamation();
    newReclamation.title = formData.title;
    newReclamation.description = formData.description;
  
    this.reclamationService.addReclamation(newReclamation).subscribe(
      response => {
        console.log('Réponse du serveur :', response);
        this.reclamationForm.reset();  // Réinitialiser le formulaire après soumission
      },
      error => {
        console.error('Erreur lors de l’ajout de la réclamation :', error);
      }
    );
  }

  // Supprimez le code commenté si vous ne l'utilisez pas
}
