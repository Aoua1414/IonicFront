import { Component, OnInit } from '@angular/core';
import { TraitementServiceService } from '../Services/traitement-service.service';

@Component({
  selector: 'app-histo-traitement',
  templateUrl: './histo-traitement.page.html',
  styleUrls: ['./histo-traitement.page.scss'],
})
export class HistoTraitementPage implements OnInit {
touttraitememt:any;

  constructor(private abasse : TraitementServiceService) { }

  ngOnInit() {
     this.abasse.lister_traitement().subscribe(data =>{
      this.touttraitememt= data;
      console.log('contenu traitememt '+this.touttraitememt)
     })

  }

}
