import * as fromCity from './city/reducers';
import * as fromCities from './cities/reducers';
import * as fromAlbums from './albums/reducers';

export const reducers = {
    selectedCity: fromCity.reducer,
    cities: fromCities.reducer,
    albums: fromAlbums.reducer
};
