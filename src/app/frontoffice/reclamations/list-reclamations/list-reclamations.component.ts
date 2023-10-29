import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/Service/reclamation.service';

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent implements OnInit {
  reclamations: any[];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe((data: any[]) => {
      this.reclamations = data;
    });
  }




}
