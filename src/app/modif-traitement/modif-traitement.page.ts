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
  
  constructor(private traitementservice: TraitementServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id_traitement=this.route.snapshot.params['id_traitement']
    this.id=this.id_traitement
    
    this.traitementservice.listerparIdTraitement(this.id_traitement).subscribe(data=>{

      this.touttraitparid=data;
      this.nom_medoc=this.touttraitparid.nom_medoc;
      this.duree_traitement=this.touttraitparid.duree_traitement;
      this.nbrePillule=this.touttraitparid.nbrePillule;
    
    })
      

    }
     modiftraitement(){
      this.traitementservice.modif_traitement(this.nom_medoc, this.duree_traitement, this.nbrePillule, this.fois_parjour, this.date_debut, this.date_fin, this.premiere_prise, this.intervalle, this.id_traitement).subscribe(data=>{
          this.modifrdv = data;
      })
     }
  
  }


