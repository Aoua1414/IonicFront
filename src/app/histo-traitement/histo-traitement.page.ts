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
   this.user = this.storage.getUser()
  //console.log('id -----'+this.user.id)
     this.serviceTraitement.lister_traitement().subscribe(data =>{
      this.touttraitememt= data;
     // console.log('contenu traitememt '+this.touttraitememt)
     })
      this.serviceTraitement.affichertoustraitdunuser(this.user.id).subscribe(data=>{
      this.sestraitements=data
      
    })
   


  }



  effacerTrait(id_traitement:number){
    Swal.fire({
      title: 'Vous voulez vraiment supprimer?',
      text: "Cette action est irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
       position:'center',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {  
        this.serviceTraitement.supptraitement(id_traitement).subscribe(data=>{
        console.log(data)
       })
        Swal.fire({
          title: 'C\'est fait!',
          text:'Suppression reussie',
          icon: 'success',
          heightAuto: false,
        }

        )
      }
    })
  }}

  //  effacerTrait(id_traitement:number){
  //   this.serviceTraitement.supp_traitement(id_traitement).subscribe(data=>{
  //     this.delete=data
      
 

