import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/model/reclamation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamations-admin',
  templateUrl: './reclamations-admin.component.html',
  styleUrls: ['./reclamations-admin.component.css']
})
export class ReclamationsAdminComponent implements OnInit {

  reclamations : any[];
  searchTitle: string; // Ajoutez cette ligne

  constructor(private reclamationService:ReclamationService,private router: Router) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe((data: any[]) => {
      this.reclamations = data;
    });
 
    }
    searchReclamations(title: string): void {
      this.reclamationService.searchByTitle(title).subscribe(
        data => this.reclamations = data,
        error => console.error('There was an error!', error)
      );
    }
    sortByDateAsc(): void {
      this.reclamationService.sortReclamationsByDateAsc().subscribe(
        data => this.reclamations = data,
        error => console.error('There was an error!', error)
      );
    }
    updateEtat(reclamation: any): void {
      // Logique pour mettre à jour l'état de la réclamation
      // Par exemple, appeler un service pour mettre à jour la réclamation dans la base de données
      console.log("État mis à jour pour", reclamation);
  }

  
  }



