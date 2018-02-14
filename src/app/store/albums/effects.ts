import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import * as albums from './actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { AppService } from '../../app.service';
import { AlbumsUpdatedAction, GetAlbumsAction } from './actions';
import { ICity } from '../../interfaces';

@Injectable()
export class AlbumsEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(albums.GETALBUMS)
        .switchMap((action: GetAlbumsAction) =>
            Observable.fromPromise(this.service
                .getAlbumsByCity(action.payload)
                .then((data) => {
                    return data;
                }))
                .map(res => new AlbumsUpdatedAction(res)));

    constructor(
        private service: AppService,
        private actions$: Actions
    ) { }
}
