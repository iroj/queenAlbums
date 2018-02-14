import { State } from '../interfaces';

export const getCityState = (state: State) => state.selectedCity;

export const getCitiesState = (state: State) => state.cities;

export const getAlbumsState = (state: State) => state.albums;
