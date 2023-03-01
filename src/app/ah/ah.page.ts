import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform  } from '@ionic/angular';
import { LocalNotifications, LocalNotificationsOriginal } from '@ionic-native/local-notifications';
// import { LocalNotifications } from '@capacitor/local-notifications';
@Component({
  selector: 'app-ah',
  templateUrl: './ah.page.html',
  styleUrls: ['./ah.page.scss'],
})
export class AhPage implements OnInit {

  constructor(public navCtrl: NavController,public alertCtrl : AlertController ,private plt: Platform) { 
  /*  this.plt.ready().then((rdy)=>{
       LocalNotifications.on('click', (notification, state)=>{
        let json = JSON.parse(notification.data);
        let alert = this.alertCtrl.create({
          title: notification.title,
          subTitle:json.mydata
        });
        alert.present();
       });
    });*/
  }

  scheduleNotification(){
    LocalNotifications.schedule({
      id:1,
      title:'Attention',
      text:'fghjhgf',
    //  at:new Date(new Date().getTime() + 5 * 1000),
      data: {mydata:'kjhgfgyuikjhgfdxcvgh'}
    });  
  }

  ngOnInit() {
  }

}
