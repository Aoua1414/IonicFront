import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifServService {

  constructor(private http:HttpClient) { }

  //Lister les rdv
  ListerRDVJour (idUser:any):Observable<any>{
        
    return this.http.get(`http://localhost:8080/rdv/jour/${idUser}`);
  }

    //Lister les rdv
 ListerTraitementJour (idUser:any):Observable<any>{
  
  return this.http.get(`http://localhost:8080/api/traitement/jour/${idUser}`);
}
}
