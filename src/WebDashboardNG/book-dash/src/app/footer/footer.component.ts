import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';
import { Infos } from '../infos';
import { Info } from '../info';
import * as moment from 'moment';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public infos : Infos;
  public dateCommit: string;
  public hourCommit : string;
  constructor( private infoService: InfoService ) { }

  ngOnInit() {
    this.infoService.getLatestInfo().subscribe(data => {

      this.infos = data;
      console.log('obtained ' + JSON.stringify(this.infos));
      this.dateCommit = moment(this.infos.dateCommit).startOf('hour').fromNow();
      this.hourCommit = moment(this.infos.dateCommit).format('MMMM Do YYYY, HH:mm:ss');
    
    });
    
    
  
  }

  

  

}
