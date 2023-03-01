import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnServiceService } from '../Services/conn-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { TraitementServiceService } from '../Services/traitement-service.service';
// import { LocalNotification, LocalNotifications ,ScheduleOptions} from '@capacitor/local-notifications';
import { LocalNotifications } from '@ionic-native/local-notifications';
//import { LocalNotifications,ScheduleOptions } from '@capacitor/local-notifications';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  // // video local notif 
  // ids:number[]=[];
  // resume:boolean=false;

  traitements:any;

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  id: any;
  Message: any;
  title:any;
  constructor(private traitement:TraitementServiceService,private connService: ConnServiceService, private tokenStorage: TokenStorageService,private route:Router) { }

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

  /*LocalNotifications.schedule({
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
    };
  })
*/
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
  /*this.traitement.TraitementByUser(this.id).subscribe(res =>{
  //tu dois creer la variable traitements en haut
  this.traitements = res
  console.log("traitement ")
  console.log(this.traitements.length)*/
  //for(let i=0;i<this.traitements.length;i++){
    console.log("heure11")

    let date = new Date();
    date.setHours(9); // Ici, on souhaite programmer la notification pour 9h du matin
    date.setMinutes(0);
    date.setSeconds(0);
    LocalNotifications.schedule({
      id:1,
      title: "Prendre le médicament",
      text: "Il est temps de prendre votre médicament ",
      //at: new Date()
    
    })
  /*  const options: ScheduleOptions = {
      notifications: [
        {id:1,
          title: 'Notification locale', // titre de la notification
          body: 'Ceci est une notification locale', // contenu de la notification
      
        }
      ]
    };*/
    
   
  
    
    
    
  /*LocalNotifications.schedule({
    id:1,
    title: "Prendre le médicament",
    text: "Il est temps de prendre votre médicament " ,
    //trigger: {at: date},
    //at: new Date()
    /*{
      year: heureDePrise.getFullYear();
      month: heureDePrise.getMonth();
      day: heureDePrise.getDate();
      hour: heureDePrise.getHours();
      minute: heureDePrise.getMinutes();
      second: heureDePrise.getSeconds();
    };
  })*/
//}
 // });
}
    //Video local push
//   setInterval(()=>{
//   if(this.resume)
//   {
//     this.schedule();
//   }
// },1000);
//   }

//   schedule(){
//     var t = new Date();
//     t.setSeconds(t.getSeconds() +5);
//     let id = this.ids.length;
//     this.ids.push(id);
//     let options:ScheduleOptions={notifications:[{
//      id:id,
//      title:"Notification Abbas ="+id,
//      body:" Awa Cherie",
//     }]
   
//    }
//    if(this.resume){
//      LocalNotifications.schedule(options).then(()=>{
       
//      })
//    }
// }

onSubmit(): void {

    const { username, password } = this.form;
    this.connService.login(username, password).subscribe(data=>{
      this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
       /* if(this.isLoggedIn == true){
          this.route.navigateByUrl("/tabs/des");
        }*/
        this.route.navigateByUrl("/tabs/des");



        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    }

    
  }
