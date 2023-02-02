import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmServiceService } from '../Services/pharm-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.page.html',
  styleUrls: ['./pharmacien.page.scss'],
})
export class PharmacienPage implements OnInit {
   
     lespharms:any;

  constructor(private pharm: PharmServiceService, private tokenStorage: TokenStorageService, private route: Router, private pharms:PharmServiceService ) { }

   //Afficher les pharmaciens 
  ngOnInit() {
    this.pharms.AfficherPharm().subscribe(data=>{
      this.lespharms=data;
    })
  }

}
