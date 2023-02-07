import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: TokenStorageService, public router: Router) { }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['connexion']);
  //     return false;
  //   }
  //   return true;
  // }


  canActivate(): boolean{
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(['connexion']);
        return false;
      }
      return true;
    }
}
