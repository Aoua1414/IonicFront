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
  id_rdv: any;
  service_medical: any;
  motif: any;
  daterdv: any;
  heure: any;
  att: any;
  motifu: any;
  serviceu: any;
  heureu: any;
  dateu: any;

  constructor(private rdvservice : RdvServiceService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.id_rdv= this.route.snapshot.params['id_rdv']
    this.id = this.id_rdv
    console.log("id du rdv est ",this.id_rdv)

    this.rdvservice.listerparIdRdv(this.id_rdv).subscribe(data =>{
      this.toutrdvparid=data;
      this.motifu = this.toutrdvparid.motif;
      this.serviceu = this.toutrdvparid.service_medical;
      this.dateu = this.toutrdvparid.date;
      this.heureu = this.toutrdvparid.heure;
      console.log("LE MOTIF est ",this.toutrdvparid.motif)
      console.log("id est ",this.toutrdvparid.id_rdv)
      // console.log("LE MOTIF est ",this.toutrdvparid.motif)
    })
  }

  modifrdv(){
    this.rdvservice.modif_rdv(this.service_medical, this.motif, this.daterdv, this.heure, this.id_rdv).subscribe(data=>{
      this.att=data;
      console.log("LE MOTIF modifie est ",this.att.motif)
      console.log("LE service modifie est ",this.att.service_medical)
      console.log("La date modifie est ",this.att.date)
      console.log("LE heure modifie est ",this.att.heure)
    })
  }

}
