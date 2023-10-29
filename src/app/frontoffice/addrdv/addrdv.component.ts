import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from 'src/app/Service/rendez-vous.service';
import { RendezVous } from 'src/app/model/rendezVous';

@Component({
  selector: 'app-addrdv',
  templateUrl: './addrdv.component.html',
  styleUrls: ['./addrdv.component.css']
})
export class AddrdvComponent implements OnInit {
  public medecinId: String;
  rdv: RendezVous = new RendezVous();

  constructor(private rdvService: RendezVousService,private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const fullReclamationId = this.currentRoute.snapshot.paramMap.get('id');
    this.medecinId = fullReclamationId.substring(fullReclamationId.indexOf('4') + 1);
    console.log("aaaaaaaaa"+this.medecinId);

    
  }
  create() {
    this.rdvService.create(this.medecinId,this.rdv).subscribe(
      () => {
        this.route.navigate(['frontoffice/medecins']);
      },
      (error) => {
        console.log('Error:', error);
      },
      () => {
        console.log('Complete');
      }
    );
  }


}
