import { Component, OnInit } from '@angular/core';
import { RdvServiceService } from '../Services/rdv-service.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
toutrdv:any;

  constructor(private wretyu : RdvServiceService) { }

  ngOnInit():void {
  this.wretyu.ListerDV().subscribe(data =>{
    this.toutrdv=data;
    console.log(this.toutrdv)
  })
  }

}
