import { Component, OnInit } from '@angular/core';
import { NotifServService } from '../Services/notif-serv.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Plugins } from '@capacitor/core';
import { LocalNotification, LocalNotifications ,ScheduleOptions} from '@capacitor/local-notifications';



const notification: LocalNotification = {
  title: 'My Notification',
  body: 'This is my notification',
  id: 1,
  schedule: {
    at: new Date(Date.now() + 5000)
  }
};
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})





export class NotificationPage implements OnInit {


  async scheduleNotification() {
    const result = await LocalNotifications.schedule({
      notifications: [notification]
    });
    console.log('Scheduled notification', result);
  }


  // video local notif 
  ids:number[]=[];
  resume:boolean=false;



   now  = new Date().toUTCString();
   id:any
   traitementlist:any=[]
   rdvlist:any=[]
  constructor(private notifService:NotifServService,private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.id = this.tokenStorage.getUser().id;
    this.traitement()
    this.rdv();
    this.scheduleNotification()

//Video local push
setInterval(()=>{
  if(this.resume)
  {
    this.schedule();
  }
},1000);

  }

  schedule(){
         var t = new Date();
         t.setSeconds(t.getSeconds() +5);
         let id = this.ids.length;
         this.ids.push(id);
         let options:ScheduleOptions={notifications:[{
          id:id,
          title:"Notification id ="+id,
          body:" body",
         }]
        
        }
        if(this.resume){
          LocalNotifications.schedule(options).then(()=>{
            
          })
        }
  }

  traitement(){
    this.notifService.ListerTraitementJour(this.id).subscribe(res=>{
      console.log(res)
      this.traitementlist=res
    })
  }

  rdv(){
    this.notifService.ListerRDVJour(this.id).subscribe(res=>{
      console.log(res)
      this.rdvlist=res
    })
  }

 

 
  
 
  

}
