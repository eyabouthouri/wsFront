import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/model/reclamation';

@Component({
  selector: 'app-reclamations-admin',
  templateUrl: './reclamations-admin.component.html',
  styleUrls: ['./reclamations-admin.component.css']
})
export class ReclamationsAdminComponent implements OnInit {

  reclamations : any[];

  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
 
    }

  }



