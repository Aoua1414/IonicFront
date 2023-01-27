import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RdvServiceService } from '../Services/rdv-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.page.html',
  styleUrls: ['./rdv.page.scss'],
})
export class RdvPage implements OnInit {
  success: any;
  form:any= { service_medical: '', motif: '', daterdv: '', heure: '', };
  erreur: any;
  isLoggedIn: any;
  id: any;


  constructor(private rdv:RdvServiceService,private tokenStorage: TokenStorageService,private route:Router) { }



  ngOnInit() {
    this.id = this.tokenStorage.getUser().id;
    console.log(this.id)
  }
  onSubmit(): void {

    const {service_medical, motif,daterdv, heure} = this.form;
    
    this.rdv.ajout_rdv(service_medical, motif,daterdv, heure, this.id).subscribe(
      data => {
        this.success = data
        if(this.success.status == true){
          this.erreur = this.success.message
        }
        else{
          this.erreur = this.success.message
        }
      })

}}
