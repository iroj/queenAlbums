import { Injectable } from '@angular/core';
import { CITIES, APIS } from './app.constants';
import { Http } from '@angular/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { mergeMap } from 'rxjs/operators/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { ICity } from './interfaces';

@Injectable()
export class AppService {
    private cityNames: Array<string> = CITIES;
    constructor(public http: Http) { }

    getCities(): Observable<Array<ICity>> {
        const observableArray = this.cityNames.map((cityName) => {
            return this.http.get(`${APIS.CITY}${cityName}`).map(res => res.json());
        });
        return forkJoin(observableArray);
    }

    async getAlbumsByCity(id: number) {
        const cityDetails = await this.http.get(`${APIS.WEATHER}${id}`)
            .map(res => res.json()).toPromise();
        const albums = await this.http.get(`${APIS.ALBUMS}`)
            .map(res => res.json()).toPromise();
        return this.getAlbums(cityDetails, albums);
    }

    getAlbums(cityDetails, albums) {
        const sunRise = new Date(cityDetails.sun_rise),
            sunSet = new Date(cityDetails.sun_set);
        const diff = sunSet.getTime() - sunRise.getTime();
        const uniqueAlbums = {};
        albums.recordings.forEach(recording => {
            recording.releases.forEach(release => {
                if (!uniqueAlbums[release.title] ||
                    uniqueAlbums[release.title] < recording.length * release['track-count']) {
                    uniqueAlbums[release.title] = recording.length * release['track-count'];
                }
            });
        });
        return {
            sunRise: cityDetails.sun_rise,
            sunSet: cityDetails.sun_set,
            uniqueAlbums: uniqueAlbums
        };
    }
}
