import { Action } from '@ngrx/store';
import { ICity } from '../../interfaces';

export const SELECTEDCITY = 'SELECTED_CITY';

export class CityChangeAction implements Action {
    type = SELECTEDCITY;

    constructor(public payload: ICity) {}
}
