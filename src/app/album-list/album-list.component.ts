import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import { ICity } from '../interfaces';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnChanges {
  @Input() city: ICity;
  sunRise: string;
  sunSet: string;
  constructor(private service: AppService) { }
  ngOnChanges(changes) {
    this.service.getAlbumsByCity(this.city.woeid).then(data => {
      // this.sunRise = `${data.sunRise.getHours()} : ${data.sunRise.getMinutes()}`;
      // this.sunSet = `${data.sunSet.getHours()} : ${data.sunRise.getMinutes()}`;
      console.log(data);
    });
  }

}
