import { Action } from '@ngrx/store';
import { IAlbum } from '../../interfaces';

export const GETALBUMS = 'GET_ALBUMS';
export const ALBUMSUPDATED = 'ALBUMS_UPDATED';

export class GetAlbumsAction implements Action {
    type = GETALBUMS;
    constructor(public payload: number) { }
}

export class AlbumsUpdatedAction implements Action {
    type = ALBUMSUPDATED;
    constructor(public payload: IAlbum) {
     }
}
