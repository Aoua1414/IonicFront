import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmServiceService {

  constructor(private http:HttpClient) { }

  //Afficher pharmaciens

  AfficherPharm(): Observable<any>{
    return this.http.get('http://localhost:8080/pharmacien/liste');
  }

}
