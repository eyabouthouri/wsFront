import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezVousService } from 'src/app/Service/rendez-vous.service';

@Component({
  selector: 'app-listrdv',
  templateUrl: './listrdv.component.html',
  styleUrls: ['./listrdv.component.css']
})
export class ListrdvComponent implements OnInit {
  rdvs: any[];
  medecinId: String;
  constructor(private rdvService: RendezVousService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const fullReclamationId = this.currentRoute.snapshot.paramMap.get('id');
    this.medecinId = fullReclamationId.substring(fullReclamationId.indexOf('4') + 1);

    this.rdvService.getRdvByMedecins(this.medecinId).subscribe((data: any[]) => {
      this.rdvs = data;
    });

  }

}
