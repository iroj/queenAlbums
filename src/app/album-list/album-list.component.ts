import { Component, Input, OnChanges } from '@angular/core';
import { AppService } from '../app.service';
import {  State, IAlbum } from '../interfaces';
import { Store } from '@ngrx/store';
import * as selectors from '../store/selectors';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnChanges {
  public albumdata$: Observable<IAlbum>;
  constructor(private store: Store<State>) {
    this.albumdata$ = store.select(selectors.getAlbumsState);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }
}
