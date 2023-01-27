import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConnServiceService {


  constructor(private http:HttpClient) { }
//connexion
  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/api/log', {
      username,
      password
    }, httpOptions);
  }
// inscription
inscription(username: string, numero: string, email:string, password:string): Observable<any> {
  const user={
    "username":username,
    "numero":numero,
    "email": email,
    "password": password
    
  }
  return this.http.post('http://localhost:8080/api/signup',user);
}
}
