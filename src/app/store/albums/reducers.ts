import { Action } from '@ngrx/store';
import * as albums from './actions';
import { IAlbum } from '../../interfaces';

export function reducer(state: Array<IAlbum>, action: albums.AlbumsUpdatedAction) {
    switch (action.type) {
        case albums.ALBUMSUPDATED: {
            return action.payload;
        }
        default:
            return state;
    }
}
