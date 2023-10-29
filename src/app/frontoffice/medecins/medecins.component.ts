import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/Service/medecin.service';
import { Medecin } from 'src/app/model/medecin';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {

  medecins: Medecin[];
  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {

    this.medecinService.getAllMedecins().subscribe((data: any[]) => {
      this.medecins = data;
    });

  }

}
