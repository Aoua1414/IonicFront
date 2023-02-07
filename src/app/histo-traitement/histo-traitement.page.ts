import { Component, OnInit } from '@angular/core';
import { TraitementServiceService } from '../Services/traitement-service.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-histo-traitement',
  templateUrl: './histo-traitement.page.html',
  styleUrls: ['./histo-traitement.page.scss'],
})
export class HistoTraitementPage implements OnInit {
touttraitememt:any;
  user: any;
  sestraitements: any;

  constructor(private abasse : TraitementServiceService, private storage:TokenStorageService) { }

  ngOnInit() {
   this.user= this.storage.getUser()
     this.abasse.lister_traitement().subscribe(data =>{
      this.touttraitememt= data;
      console.log('contenu traitememt '+this.touttraitememt)
     })
    this.abasse.affichertoustraitdunuser(this.user.id).subscribe(data=>{
      this.sestraitements=data
    })
  }

}
