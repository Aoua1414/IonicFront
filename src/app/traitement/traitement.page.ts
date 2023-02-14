import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementServiceService } from '../Services/traitement-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.page.html',
  styleUrls: ['./traitement.page.scss'],
})
export class TraitementPage implements OnInit {

form:any={
nom_medoc:null,
duree_traitement:"",
nbrePillule:"",
intervalle:"",
date_debut:"",
date_fin:"",
premiere_prise:"",
fois_parjour:"",
user:""
};


form2:any={
  nom_medoc:null,
  duree_traitement:"",
  nbrePillule:"",
  intervalle:"",
  date_debut:"",
  date_fin:"",
  premiere_prise:"",
  fois_parjour:"",
  user:""
  };
isLoggedIn = false;
isLoginFailed = false;
errorMessage = '';
  id: any;
  Message: any;

constructor(private traitement:TraitementServiceService,private tokenStorage: TokenStorageService,private route:Router) { }

  ngOnInit() {

    
  }
  onSubmit(): void {
    const { 
      nom_medoc, 
      duree_traitement,
      nbrePillule,
      intervalle,
      date_debut,
      date_fin,
      premiere_prise,
      fois_parjour,
      user
                          } = this.form;
  this.id = this.tokenStorage.getUser().id;
  console.log('utilisateur ' +this.id)

// this.form2.nom_medoc = this.form.nom_medoc
// this.form2.duree_traitement = this.form.duree_traitement
// this.form2.nbrePillule = this.form.nbrePillule
// this.form2.intervalle = this.form.intervalle
// this.form2.date_debut = this.form.date_debut
// this.form2.date_fin = this.form.date_fin
// this.form2.premiere_prise = this.form.premiere_prise
// this.form2.fois_parjour = this.form.fois_parjour

//affichage

  // console.log('Test '+this.form2.nom_medoc)
  // console.log('Test '+this.form2.duree_traitement)
  // console.log('Test '+this.form2.nbrePillule)
  // console.log('Test '+this.form2.intervalle)
  // console.log('Test '+this.form2.date_debut)
  // console.log('Test '+this.form2.date_fin)
  // console.log('Test '+this.form2.premiere_prise)
  // console.log('Test '+this.form2.fois_parjour)

       this.traitement.ajout_traitement(this.form2.nom_medoc,this.form2.duree_traitement,this.form2.nbrePillule,this.form2.fois_parjour,this.form2.date_debut,this.form2.date_fin,this.form2.premiere_prise,this.form2.intervalle,this.id).subscribe(data=>{
       this.tokenStorage.saveToken(data.accessToken);
       this.tokenStorage.saveUser(data);
       this.reloadPage();
       this.Message = data.message;
 })                 
  }

  reloadPage(): void {
    window.location.reload();
  // this.route.navigateByUrl("/sidebar/w")
   }

}
