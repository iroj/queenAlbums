import { Injectable } from '@angular/core';
import { CITIES, APIS } from './app.constants';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { mergeMap } from 'rxjs/operators/mergeMap';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { ICity } from './interfaces';

@Injectable()
export class AppService {
    private cityNames: Array<string> = CITIES;
    constructor(public http: HttpClient) { }

    getCities(): Observable<ICity[]> {
        const observableArray = this.cityNames.map((cityName) => {
            return this.http.get(`${APIS.CITY}${cityName}`).map(res => {
                return res[0];
            });
        });
        return forkJoin(observableArray);
    }

    async getAlbumsByCity(id: number) {
        const cityDetails = await this.http.get(`${APIS.WEATHER}${id}`)
            .map(res => {
                return res;
            }).toPromise();
        const albums = await this.http.get(`${APIS.ALBUMS}`)
            .map(res => {
                return res;
            }).toPromise();
        return this.getAlbums(cityDetails, albums);
    }

    getAlbums(cityDetails, albums) {
        const sunRise = new Date(cityDetails.sun_rise),
            sunSet = new Date(cityDetails.sun_set);
        const diff = sunSet.getTime() - sunRise.getTime();
        const uniqueAlbums = {};
        let sum = 0;
        albums.recordings.forEach(recording => {
            recording.releases.forEach(release => {
                if (!recording.length || !release['track-count'] ||
                    (sum + recording.length * release['track-count']) >= diff) {
                    return;
                }
                if (!uniqueAlbums[release.title] ||
                    uniqueAlbums[release.title] < recording.length * release['track-count']) {
                    uniqueAlbums[release.title] = recording.length * release['track-count'];
                    sum += recording.length * release['track-count'];
                }
            });
        });
        return {
            sunrise: cityDetails.sun_rise,
            sunset: cityDetails.sun_set,
            daylight: diff,
            totallength: sum,
            uniqueAlbums: this.getArray(uniqueAlbums)
        };
    }

    getArray(obj) {
        const array = [];
        // tslint:disable-next-line:forin
        for (const key in obj) {
            array.push({ key: key, value: obj[key] });
        }
        return array;
    }
}
