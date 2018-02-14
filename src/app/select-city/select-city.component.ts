import { Component, OnInit } from '@angular/core';
import { ICity, State } from '../interfaces';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import * as selectors from '../store/selectors';
import { CityChangeAction } from '../store/city/actions';
import { GetCitiesAction } from '../store/cities/actions';
import { GetAlbumsAction } from '../store/albums/actions';
@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.css']
})
export class SelectCityComponent implements OnInit {
  cities$: Observable<ICity[]>;
  selectedCity$: Observable<ICity>;
  constructor(private store: Store<State>) {
    this.selectedCity$ = store.select(selectors.getCityState);
    this.cities$ = store.select(selectors.getCitiesState);
  }

  ngOnInit() {
    this.store.dispatch(new GetCitiesAction());
  }

  cityChanged(city: ICity) {
    this.store.dispatch(new CityChangeAction(city));
    this.store.dispatch(new GetAlbumsAction(city.woeid));
  }
}
