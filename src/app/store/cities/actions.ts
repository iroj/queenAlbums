import { Action } from '@ngrx/store';
import { ICity } from '../../interfaces';

export const GETCITIES = 'GET_CITIES';
export const CITIESUPDATED = 'CITIES_UPDATED';

export class GetCitiesAction implements Action {
    type = GETCITIES;
}

export class CitiesUpdatedAction implements Action {
    type = CITIESUPDATED;
    constructor(public payload: ICity[]) { }
}
