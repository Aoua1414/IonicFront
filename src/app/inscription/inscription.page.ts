import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConnServiceService } from '../Services/conn-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  success: any;
  form:any= { username: '', email: '', numero: '', password: '', password2: '' };
  erreur: any;
isLoggedIn: any;

  constructor(private connService : ConnServiceService, private router:Router) { }

  ngOnInit() {
  }
  onSubmit(): void {
    // 

    const {username, email,numero, password, password2 } = this.form;

    if(this.form.password.length<6 ){
      Swal.fire({
        heightAuto: false,
       // position: 'top-end',
        icon: 'error',
        text: 'Les Donnez des mots de passe superieurs a 6 caracteres',
        showConfirmButton: false,
        timer: 2500
          })
        }
    if(this.form.password != this.form.password2){
       //swl=popop
       Swal.fire({
        heightAuto: false,
       // position: 'top-end',
        icon: 'error',
        text: 'Les mots de passe ne correspondent pas',
        showConfirmButton: false,
        timer: 2500
          })
    }

    if(this.form.password ==this.form.password2){
      this.connService.inscription(username, email,numero, password,).subscribe(
        data => {
          this.success = data
          if (this.success.status = true)
           {
            //swl=popop
            Swal.fire({
              heightAuto: false,
             // position: 'top-end',
              icon: 'success',
              text: 'Compte crée avec succès',
              showConfirmButton: false,
              timer: 2500
                })
                this.router.navigateByUrl('/connexion')
           }
          if(this.success.status = false) {
            this.erreur = this.success.message
            // console.log(this.erreur)
          }
        }
      );
    
    }
   

    }}

