import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as cities from './actions';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { AppService } from '../../app.service';
import { CitiesUpdatedAction } from './actions';
import { ICity } from '../../interfaces';

@Injectable()
export class CitiesEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(cities.GETCITIES)
        .switchMap(() =>
            this.service
                .getCities()
                .map((data: ICity[]) => new CitiesUpdatedAction(data))
        );

    constructor(
        private service: AppService,
        private actions$: Actions
    ) { }
}
