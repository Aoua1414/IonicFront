import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

 
}
