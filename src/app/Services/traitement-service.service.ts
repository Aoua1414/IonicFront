import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { traitement } from '../Models/traitementModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TraitementServiceService {

  constructor(private http:HttpClient) { }

// ajouter traitement

    ajout_traitement(
    nom_medoc:any,
    duree_traitement:any,
    nbrePillule:any,
    fois_parjour:any,
    date_debut:any, 
    date_fin:any,
    premiere_prise:any,
    intervalle:any,
     id:any
     ):Observable<any>{
    let traitement=

    {
      "nom_medoc":nom_medoc,
      "duree_traitement":duree_traitement,
      "nbrePillule":nbrePillule,
      "fois_parjour":fois_parjour,
      "date_debut":date_debut,
      "date_fin":date_fin,
      "premiere_prise":premiere_prise+":00",
      "intervalle":intervalle+":00" 
  }
  console.log(traitement)
    return this.http.post(`http://localhost:8080/api/traitement/ajouter/${id}`,traitement);
  }

  //afficher traitement
  
  lister_traitement():Observable<any>{

    return this.http.get(`http://localhost:8080/api/traitement/liste`);
  }

  //modifier traitement


  modif_traitement(
    nom_medoc:any,
    duree_traitement:any,
    nbrePillule:any,
    fois_parjour:any,
    date_debut:any, 
    date_fin:any,
    premiere_prise:any,
    intervalle:any,
     id:any
     ):Observable<any>{
  
      console.log(id, "hdghhdhdhdh")
    const traitement=
  
    {
      "nom_medoc":nom_medoc,
      "duree_traitement":duree_traitement,
      "nbrePillule":nbrePillule,
      "fois_parjour":fois_parjour,
      "date_debut":date_debut,
      "date_fin":date_fin,
      "premiere_prise":premiere_prise,
      "intervalle":intervalle,


  
  }
  
    return this.http.put(`http://localhost:8080/api/traitement/modifier/${id}`,traitement);
  }
  
  
  // fonction afficher un seul traitement
  
  listerparIdTraitement (id_traitement: number):Observable<any>{
    console.log("id du traitement est ",id_traitement)
    return this.http.get(`http://localhost:8080/api/traitement/traitparid/${id_traitement}`);
  }

  //afficher tous les traitements d'un user
  
  affichertoustraitdunuser(id_user:any):Observable<any>{

    return this.http.get(`http://localhost:8080/api/traitement/traituserconn/${id_user}`);
  }

    // suppression 

  url=`http://localhost:8080/rdv/suprimer`
  public supptraitement(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

  }
  

 

