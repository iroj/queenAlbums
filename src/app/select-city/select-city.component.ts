import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ICity } from '../interfaces';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent  {
  @Input() cities: Observable<ICity[]>;
  @Output() selectedCityChange = new EventEmitter();

  selectedCity: ICity;
  constructor() { }

  cityChanged() {
    this.selectedCityChange.emit(this.selectedCity);
  }
}
