import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotification, LocalNotifications ,ScheduleOptions} from '@capacitor/local-notifications';
import { ConnServiceService } from '../Services/conn-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


   // video local notif 
   ids:number[]=[];
   resume:boolean=false;
 
   
   form: any = {
     username: null,
     password: null
   };
   isLoggedIn = false;
   isLoginFailed = false;
   errorMessage = '';
   roles: string[] = [];
bod:string="";
 
notifications = [
    {
        title: 'Abasse 1',
        body: 'herie Aoua 1',
        duree:4000
    },
    {
        title: 'Abasse 2',
        body: 'Cherie Aoua 2',
        duree:3000
    },
    {
        title: 'Abasse 3',
        body: 'Aoua3',
        duree:6000
    }
];

  constructor(private connService: ConnServiceService, private tokenStorage: TokenStorageService,private route:Router) { }

  ngOnInit() {
    let delayBetweenNotifications = 5000; // Remplacez 5000 par la valeur de votre choix

    setInterval(() => {
        if (this.resume) {
            this.schedule();
        }
    }, delayBetweenNotifications);
}

 /* schedule(){
    for(let i=0; i<this.notificat.length;i++){
      var t = new Date();
      t.setSeconds(t.getSeconds() +5);
      let id = this.ids.length;
      this.ids.push(id);
      let options:ScheduleOptions={notifications:[{
       id:id,
       title:this.notificat[i].title,
       body:"Veuillez prendre votre medicament : trifed 2",
     //  body:this.notificat[i].bod,
      }]
     
     }
     if(this.resume){
       LocalNotifications.schedule(options).then(()=>{
         
       })
     }
    }
  
}
*/


// Planifier les notifications
schedule() {
  for (let i = 0; i < this.notifications.length; i++) {
      let t = new Date();
      t.setTime(t.getTime() + this.notifications[i].duree);
      let id = this.ids.length;
      this.ids.push(id);

      let options: ScheduleOptions = {
          notifications: [{
              id: id,
              title: this.notifications[i].title,
              body: this.notifications[i].body,
              schedule: { at: t }
          }]
      };

      if (this.resume) {
          LocalNotifications.schedule(options).then(() => {
              console.log('Notification planifiée!');
          });
      }
  }
}
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

  ert(){
    this.route.navigateByUrl("/tabs/des")
  }

}
