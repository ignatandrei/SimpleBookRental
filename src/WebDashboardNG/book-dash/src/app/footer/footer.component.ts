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
export class FooterComponent {
public infos : Info[];

  constructor( private infoService: InfoService) { }

  ngOnInit() {
    this.infoService.getLatestInfo().subscribe(data => {
      this.infos = data;

    })

    let dateCommit = moment(this.infos.dateCommit).startOf('hour').fromNow();
    let hourCommit = moment(this.infos.dateCommit).format('MMMM Do YYYY, HH:mm:ss');
  
  }

  

  

}
