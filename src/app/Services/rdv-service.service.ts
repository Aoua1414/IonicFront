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
  affichertousrdvdunuser: any;
  affichertoustraitdunuser(id: any) {
    throw new Error('Method not implemented.');
  }

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

//Modifier rdv
modif_rdv(
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
  return this.http.put(`http://localhost:8080/rdv/modifier/${id}`,rdv);
}

// fonction afficher un seul rdv

listerparIdRdv (id_rdv: number):Observable<any>{
  console.log("id du rdv sevice est ",id_rdv)
  return this.http.get(`http://localhost:8080/rdv/parid/${id_rdv}`);
}
//enregistrer 


// fonction afficher tous les rdv d'un user

touslesrdvdunuser (id_user: any):Observable<any>{

  return this.http.get(`http://localhost:8080/rdv/parid/${id_user}`);
}


 //afficher tous les traitements d'un user
 
  recuptouslesrdvdunuser (id_user:any):Observable<any>{

    return this.http.get(`http:// localhost:8080/rdv/rdvduuserconnecte/${id_user}`);
  }

}
