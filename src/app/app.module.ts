import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SelectCityComponent } from './select-city/select-city.component';
import { AlbumListComponent } from './album-list/album-list.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index';

import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './store/cities/effects';
import { AlbumsEffects } from './store/albums/effects';
import { DurationPipe } from './pipes/durationPipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    AlbumListComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CitiesEffects, AlbumsEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
