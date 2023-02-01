import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RdvServiceService } from '../Services/rdv-service.service';

@Component({
  selector: 'app-modif-rdv',
  templateUrl: './modif-rdv.page.html',
  styleUrls: ['./modif-rdv.page.scss'],
})

// getter le rdv qui doit etre modifier

export class ModifRdvPage implements OnInit {
 
  id: any;
  toutrdvparid: any;

  constructor(private rdvservice : RdvServiceService, private route:ActivatedRoute) { }

  ngOnInit() {

    const id_rdv= this.route.snapshot.params['id_rdv']
    this.id = id_rdv
    console.log("id du rdv est ",id_rdv)

    this.rdvservice.listerparIdRdv(id_rdv).subscribe(data =>{
      this.toutrdvparid=data;

      console.log("LE MOTIF est ",this.toutrdvparid.motif)
    })
  }

}
