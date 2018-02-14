import { Action } from '@ngrx/store';
import * as city from './actions';
import { ICity } from '../../interfaces';

export function reducer(state: ICity, action: city.CityChangeAction) {
    switch (action.type) {
        case city.SELECTEDCITY:
            return action.payload;
        default:
            return state;
    }
}
