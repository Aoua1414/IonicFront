import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnServiceService } from '../Services/conn-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private connService: ConnServiceService, private tokenStorage: TokenStorageService,private route:Router) { }

  ngOnInit() {
  }

onSubmit(): void {

    const { username, password } = this.form;
    this.connService.login(username, password).subscribe(data=>{
      this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        if(this.isLoggedIn == true){
          this.route.navigateByUrl("/tabs/des");
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    }
  }
    
