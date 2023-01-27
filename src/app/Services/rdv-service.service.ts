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

 ListerDV ():Observable<any>{

    return this.http.get(`http://localhost:8080/rdv/liste`);
  }
}
