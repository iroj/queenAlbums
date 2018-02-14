export interface ICity {
    title: string;
    location: string;
    woeid: number;
    latt_lang: string;
}

export interface IAlbum {
    sunrise: string;
    sunset: string;
    uniqueAlbums: Array<any>;
    totallength: number;
    daylight: number;
}

export interface State {
    selectedCity: ICity;
    cities: ICity[];
    albums: IAlbum;
}


