import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/Service/medecin.service';
import { Medecin } from 'src/app/model/medecin';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
searchNom: String;
  medecins: any[];
  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {

    this.medecinService.getAllMedecins().subscribe((data: any[]) => {
      this.medecins = data;
    });

  }
  searchMedecins(nom: String): void {
    if (nom.trim() === '' || this.searchNom === '') {
      this.medecinService.getAllMedecins().subscribe((data: any[]) => {
        this.medecins = data;
  })} else {  
    this.medecinService.searchByNom(nom).subscribe(
      data => this.medecins = data,

    );

  }
  }
}
