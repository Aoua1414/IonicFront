import { Component, OnInit } from '@angular/core';
import { TraitementServiceService } from '../Services/traitement-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-histo-traitement',
  templateUrl: './histo-traitement.page.html',
  styleUrls: ['./histo-traitement.page.scss'],
})
export class HistoTraitementPage implements OnInit {
  touttraitememt:any;
  user: any;
  sestraitements: any;

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

  // modal suppression

  // openModal(nom_medoc : any, id_traitement : number) {
  //   if(nom_medoc !== undefined){
  //     Swal.fire({
  //       title: nom_medoc,
  //       text: "Confirmer la suppression ?",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       cancelButtonText : "NON",
  //       confirmButtonText: 'OUI'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         //suppp
  //         this.serviceTraitement.supptraitement(id_traitement).subscribe(() => {
  //         console.log(id_traitement)
  //         Swal.fire(
  //           'Supprimer!',
  //           'Traitement supprimé avec succès'
  //         );
  //       });
        
  //     }
  //   });
  //   }
    

  }
// openModal(username : any, id : number) {
//   Swal.fire({
//     title: username,
//     text: "Commfirmer la suppression ?",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     cancelButtonText : "NON",
//     confirmButtonText: 'OUI'
//   }).then((result) => {
//     if (result.isConfirmed) {
      
      
//       //suppp
//       this.abasse.supptraitement(id).subscribe(() => {});
//       console.log(id)
//       Swal.fire({
//         title: 'Supprimer  avec succès',
//         icon: 'success',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       });
//       // window.location.reload()


//     }
//   });
// }

// }
