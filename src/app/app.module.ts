import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { AboutComponent } from './components/about/about.component';
import { AppTracksComponent } from './components/search-results-list/search-result-list.component';
import { AppTrackComponent } from './components/search-result-item/search-result-item.component';
import { ArtistAlbumsComponent } from './components/artist-albums/artist-albums.component';
import { ArtistAlbumComponent } from './components/artist-album/artist-album.component';
import { AlbumTracksComponent } from './components/album-tracks/album-tracks.component';
import { AlbumTrackComponent } from './components/album-track/album-track.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    AlbumComponent,
    AboutComponent,
    AppTracksComponent,
    AppTrackComponent,
    ArtistAlbumsComponent,
    ArtistAlbumComponent,
    AlbumTracksComponent,
    AlbumTrackComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
