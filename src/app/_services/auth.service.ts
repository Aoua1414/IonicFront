import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService,
    private tokenStorage: TokenStorageService,private router:Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, numero: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      numero,
      password
    }, httpOptions);
  }

  public isAuthenticated(): boolean {  
      const token = window.sessionStorage.getItem('token');    // Check whether the token is expired and return
  // true or false
  return !this.jwtHelper.isTokenExpired(token);
}

logout(): void{
  this.tokenStorage.signOut();
  this.router.navigateByUrl('connexion')
  window.location.reload();
}

}
