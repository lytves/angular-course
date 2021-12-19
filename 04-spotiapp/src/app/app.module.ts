import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';

// pipes
import {ImgCheckPipe} from './pipes/img-check.pipe';
import {SecuredomPipe} from './pipes/securedom.pipe';

// components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {ArtistsCardsComponent} from './components/artists-cards/artists-cards.component';
import {LoadingComponent} from './components/shared/loading/loading.component';
import {SpotifyService} from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    ImgCheckPipe,
    SecuredomPipe,
    ArtistsCardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
