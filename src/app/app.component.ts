import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs/observable';
import { ICity, State } from './interfaces';
import { Store } from '@ngrx/store';
import * as selectors from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedCity$: Observable<ICity>;
  constructor(private store: Store<State>) {
    this.selectedCity$ = store.select(selectors.getCityState);
  }

  ngOnInit() {

  }


}
