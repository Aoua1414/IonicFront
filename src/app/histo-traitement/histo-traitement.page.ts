import { Component, OnInit } from '@angular/core';
import { TraitementServiceService } from '../Services/traitement-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-histo-traitement',
  templateUrl: './histo-traitement.page.html',
  styleUrls: ['./histo-traitement.page.scss'],
})
export class HistoTraitementPage implements OnInit {
  touttraitememt:any;
  user: any;
  sestraitements: any;
  http: any;
  delete:any;

  constructor(private serviceTraitement : TraitementServiceService, private storage:TokenStorageService) { }

  ngOnInit() {
   this.user= this.storage.getUser()
     this.serviceTraitement.lister_traitement().subscribe(data =>{
      this.touttraitememt= data;
      console.log('contenu traitememt '+this.touttraitememt)
     })
      this.serviceTraitement.affichertoustraitdunuser(this.user.id).subscribe(data=>{
      this.sestraitements=data
    })
   


  }

  effacerTrait(id_traitement:number){
    this.serviceTraitement.supp_traitement(id_traitement).subscribe(data=>{
      this.delete=data
     })
  }
 
 
    

  }

 

