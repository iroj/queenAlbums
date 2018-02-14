import { Action } from '@ngrx/store';
import * as cities from './actions';
import { ICity } from '../../interfaces';

export function reducer(state: ICity[], action: cities.CitiesUpdatedAction) {
    switch (action.type) {
        case cities.CITIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}
