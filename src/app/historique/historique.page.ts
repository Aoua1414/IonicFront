import { Component, OnInit } from '@angular/core';
import { RdvServiceService } from '../Services/rdv-service.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
toutrdv:any;
  idRdvv!: number;
  motiff: any;

  constructor(private wretyu : RdvServiceService) { }
// getter tous les rdv

  ngOnInit():void {
  this.wretyu.ListerDV().subscribe(data =>{
    this.toutrdv=data;

     this.idRdvv=this.toutrdv.id_rdv;
     this.motiff=this.toutrdv.motif;
    console.log("les rdv sont ",this.toutrdv)
    console.log("id du rdv est ",this.idRdvv)
    console.log("id le motif est ",this.motiff)

   for(let aah of this.toutrdv){
    console.log("les id sont", aah.id_rdv)
  }
  })
  
  
  }

}


