import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/observable';
import { ICity } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cities: Array<ICity>;
  selectedCity: ICity;
  constructor(public service: AppService) { }

  ngOnInit() {
    this.service.getCities().subscribe(results => {
      this.cities = [].concat(...results);
    });
  }

  cityChanged(city: ICity) {
    this.selectedCity = city;
  }
}
