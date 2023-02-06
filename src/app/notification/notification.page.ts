import { Component, OnInit } from '@angular/core';
import { NotifServService } from '../Services/notif-serv.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
   now  = new Date().toUTCString();
   id:any
   traitementlist:any=[]
   rdvlist:any=[]
  constructor(private notifService:NotifServService,private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    this.id = this.tokenStorage.getUser().id;
    this.traitement()
    this.rdv()
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
