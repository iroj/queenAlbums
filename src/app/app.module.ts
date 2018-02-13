import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SelectCityComponent } from './select-city/select-city.component';
import { AlbumListComponent } from './album-list/album-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
