import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraitementServiceService } from '../Services/traitement-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
//import { LocalNotifications,ScheduleOptions } from '@capacitor/local-notifications';
import { LocalNotifications, LocalNotificationsOriginal } from '@ionic-native/local-notifications';
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
  title:any;
constructor(private traitement:TraitementServiceService,private tokenStorage: TokenStorageService,private route:Router ) { }

traitements:any;
ngOnInit() {

this.id = 2;
this.traitement.TraitementByUser(this.id).subscribe(res =>{
//tu dois creer la variable traitements en haut
this.traitements = res
console.log("traitement ")
console.log(this.traitements.length)
for(let i=0;i<this.traitements.length;i++){
  console.log("heure11")

  //Date date = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
   // Convertir LocalDate en Date

   
// Convertir LocalDate en Date
const date = new Date(this.traitements[i].date_debut);
  // const date = parseISO(this.traitements[i].date_debut);
  console.log(date.getFullYear())
const date1 = new Date(this.traitements[i].premiere_prise)

console.log(this.traitements[i].premiere_prise)
//this.traitements[i].premiere_prise = new Date();
//const currentHour = this.traitements[i].premiere_prise.getHours();


const timeString = this.traitements[i].premiere_prise; // suppose que this.traitements[i].premiere_prise est une chaîne de caractères au format "hh:mm:ss"
const timeParts = timeString.split(':');
const time = new Date(0, 0, 0, timeParts[0], timeParts[1], timeParts[2]); // crée un nouvel objet Time
const currentHour = time.getHours();
const currentMin = time.getMinutes();

console.log("heure exacte")
console.log(currentMin)

  let heureDePrise = new Date(date.getFullYear(), date.getMonth(), date.getDate(), currentHour, currentMin);
  let now = new Date();

  console.log("heure")
  console.log(heureDePrise)
  if (heureDePrise < now) {
      return; 
      // Ignorez ce médicament s'il est déjà pris
  }

  /*const notification: Notification = {
    title: "Prendre le médicament",
    text: "Il est temps de prendre votre médicament " + this.traitements[i].nom_medoc,
    at: {
      year: heureDePrise.getFullYear(),
      month: heureDePrise.getMonth(),
      day: heureDePrise.getDate(),
      hour: heureDePrise.getHours(),
      minute: heureDePrise.getMinutes(),
      second: heureDePrise.getSeconds()
    }
  };
  
  LocalNotifications.schedule(notification);
*/
const nows = new Date().getTime();
const heureDePrises = new Date(nows + 5 * 1000);

  LocalNotifications.schedule({
    id:1,
    title: "Prendre le médicament",
    text: "Il est temps de prendre votre médicament " + this.traitements[i].nom_medoc,
    //at: new Date()
    /*{
      year: heureDePrise.getFullYear();
      month: heureDePrise.getMonth();
      day: heureDePrise.getDate();
      hour: heureDePrise.getHours();
      minute: heureDePrise.getMinutes();
      second: heureDePrise.getSeconds();
    };*/
  })

  /*const options: ScheduleOptions = {
    title: "Prendre le médicament",
    text: "Il est temps de prendre votre médicament " + this.traitements.nom_medoc;
    at: heureDePrise
  };
  LocalNotifications.schedule(options);*/


};

});

}

AbasseSchedule(){
  this.id = 2;
  this.traitement.TraitementByUser(this.id).subscribe(res =>{
  //tu dois creer la variable traitements en haut
  this.traitements = res
  console.log("traitement ")
  console.log(this.traitements.length)
  for(let i=0;i<this.traitements.length;i++){
    console.log("heure11")

    let date = new Date();
    date.setHours(9); // Ici, on souhaite programmer la notification pour 9h du matin
    date.setMinutes(0);
    date.setSeconds(0);
  LocalNotifications.schedule({
    id:1,
    title: "Prendre le médicament",
    text: "Il est temps de prendre votre médicament " + this.traitements[i].nom_medoc,
    //trigger: {at: date},
    //at: new Date()
    /*{
      year: heureDePrise.getFullYear();
      month: heureDePrise.getMonth();
      day: heureDePrise.getDate();
      hour: heureDePrise.getHours();
      minute: heureDePrise.getMinutes();
      second: heureDePrise.getSeconds();
    };*/
  })
}
  });
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