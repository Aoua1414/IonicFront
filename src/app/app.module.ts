import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import{LocalNotification} from '@ionic-native/local-notifications'
//import { LocalNotifications } from '@capacitor/local-notifications';
import { LocalNotifications, LocalNotificationsOriginal } from '@ionic-native/local-notifications';




export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,HttpClientModule, JwtModule.forRoot({
      
    config: {
     tokenGetter: tokenGetter,
     
    allowedDomains: ["localhost:8103" ]
    },
  }), RouterModule],
  providers: [
   
    
   
    { provide: RouteReuseStrategy,
    
     useClass: IonicRouteStrategy }],
     
  bootstrap: [AppComponent],
 
})
export class AppModule {}

