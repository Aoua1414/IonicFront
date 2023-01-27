import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RdvServiceService {

  constructor(private http:HttpClient) { }
//Lister les rdv
 ListerDV ():Observable<any>{

    return this.http.get(`http://localhost:8080/rdv/liste`);
  }

//ajouter rdv
ajout_rdv(
  service_medical:any,
  motif:any,
  daterdv:any,
  heure:any,
   id:any
   ):Observable<any>{

    console.log(id, "hdghhdhdhdh")
  const rdv=

  {
    "service_medical":service_medical,
    "motif":motif,
    "date":daterdv,
    "heure":heure,

}
  return this.http.post(`http://localhost:8080/rdv/ajouter/${id}`,rdv);
}
}
