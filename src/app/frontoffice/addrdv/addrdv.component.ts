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
  minDate: string; // The variable to store the minimum date (in "yyyy-MM-ddTHH:mm" format)
  existingDates: string[] = []; // Declare as a class property
  errorMessage: string = ''; // To store error messages

  constructor(private rdvService: RendezVousService,private route: Router, private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.rdvService.getExistingDatesForMedecin(this.medecinId).subscribe(
      (dates: string[]) => {
        this.existingDates = dates;
        this.setMinDate();
      },
      (error) => {
        console.error('Error fetching existing dates:', error);
      });
    const fullReclamationId = this.currentRoute.snapshot.paramMap.get('id');
    this.medecinId = fullReclamationId.substring(fullReclamationId.indexOf('4') + 1);
    console.log("aaaaaaaaa"+this.medecinId);

    
  }
  private setMinDate(): void {
    if (this.existingDates.length > 0) {
      const minDate = new Date(Math.min(...this.existingDates.map(date => new Date(date).getTime())));
      this.minDate = minDate.toISOString().substring(0, 16); // Format "yyyy-MM-ddTHH:mm"
    } else {
      this.minDate = ''; // No existing dates, so no restrictions
    }
  }

  create() {
    // Check if the appointment date already exists
    const dateToCheck = this.rdv.dateRdv.toString();
  
    if (this.existingDates.includes(dateToCheck)) {
      this.errorMessage = 'Appointment already exists for this date.';
    } else {
      // If the date doesn't exist, proceed to create the appointment
      this.rdvService.create(this.medecinId, this.rdv).subscribe(
        () => {
          this.route.navigate(['frontoffice/medecins']);
        },
        (error) => {
          if (error.status === 500) {
            this.errorMessage = 'Date conflict: Appointment already exists for this date.';
          } else {
            console.error('Error:', error);
          }
        },
        () => {
          console.log('Complete');
        }
      );
    }
  }
  }

