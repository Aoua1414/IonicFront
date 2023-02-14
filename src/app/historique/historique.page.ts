import { Component, OnInit } from '@angular/core';
import { RdvServiceService } from '../Services/rdv-service.service';
import { TokenStorageService } from '../_services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {
toutrdv:any;
  idRdvv!: number;
  motiff: any;
  sesrdv: any;
  user: any;
  rdvs: any;

  constructor(private rendevous : RdvServiceService, private storage:TokenStorageService) { }

// getter tous les rdv

  ngOnInit():void {

    this.user=this.storage.getUser()
  this.rendevous.ListerDV().subscribe(data =>{
    this.toutrdv=data;

     this.idRdvv=this.toutrdv.id_rdv;
     this.motiff=this.toutrdv.motif;
    console.log("les rdv sont ",this.toutrdv)
    console.log("id du rdv est ",this.idRdvv)
    console.log("id le motif est ",this.motiff)

   for(let aah of this.toutrdv){
    console.log("les id sont", aah.id_rdv)
  }
  })
  
  // this.wretyu.affichertousrdvdunuser(this.user.id).subscribe(data=>{
  //   this.sesrdv=data
  // })


  this.rendevous.recuptouslesrdvdunuser(this.user.id).subscribe(data =>{
    this.rdvs=data
  })
  }
}

  // modal suppression

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
//       this.rendevous.supprdv(id).subscribe(() => {});
//       console.log(id)
//       Swal.fire({
//         title: 'Supprimer  avec succès',
//         icon: 'success',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       });
//       window.location.reload()


//     }
//   });
// }
// }


