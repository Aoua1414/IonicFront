import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TraitementServiceService } from '../Services/traitement-service.service';

@Component({
  selector: 'app-modif-traitement',
  templateUrl: './modif-traitement.page.html',
  styleUrls: ['./modif-traitement.page.scss'],
})
export class ModifTraitementPage implements OnInit {

// getter le rdv qui doit etre modifier
  id:any;
  touttraitparid: any;
  id_traitement:any;
  nom_medoc:any;
  duree_traitement:any;
  nbrePillule:any;
  fois_parjour:any;
  date_debut:any;
  date_fin:any;
  premiere_prise:any;
  intervalle:any;
  modifrdv: any;
  intervallee: any;
  date_debutt: any;
  date_finn: any;
  foisparjourr: any;
  // premiere_prise: any;
  
  constructor(private traitementservice: TraitementServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id_traitement=this.route.snapshot.params['id_traitement']
    this.id=this.id_traitement
    
    this.traitementservice.listerparIdTraitement(this.id_traitement).subscribe(data=>{

      this.touttraitparid=data;
      console.log("wqertyuio");
      
      this.nom_medoc=this.touttraitparid.nom_medoc;
      this.duree_traitement=this.touttraitparid.duree_traitement;
      this.nbrePillule=this.touttraitparid.nbrePillule;
      this.intervallee=this.touttraitparid.intervalle;
      this.date_debut=this.touttraitparid.date_debut;
      this.date_finn=this.touttraitparid.date_fin;
      this.foisparjourr=this.touttraitparid.fois_parjour;
      this.premiere_prise=this.touttraitparid.premiere_prise;
    })
      

    }

     modiftraitement(){
    
      console.log(this.date_debut)
      this.traitementservice.modif_traitement(this.nom_medoc, this.duree_traitement, this.nbrePillule, this.fois_parjour, this.date_debut, this.date_fin, this.premiere_prise, this.intervalle, this.id_traitement).subscribe(data=>{
          this.modifrdv = data;
          this.reloadPage();
      })
     }

     reloadPage(): void {
      window.location.reload();
    // this.route.navigateByUrl("/sidebar/w")
     }
  
  
  }


