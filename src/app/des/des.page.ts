import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-des',
  templateUrl: './des.page.html',
  styleUrls: ['./des.page.scss'],
})
export class DesPage implements OnInit {

// Deconnexion

logout(): void {
this.tokenStorage.signOut();
this.route.navigateByUrl('accueil')
window.location.reload();
}

  constructor(private tokenStorage: TokenStorageService,
    private route: Router) { }

  ngOnInit() {
  }

}
