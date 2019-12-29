import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWK-5nLBDFA606O_Lfs6bY3h1DukmLr-2wmXre4UtaNQZtLKcw4qK5mpA5D2NUCYPpNhAbYXHsgD8AfZ8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getSearchArtists(text: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWK-5nLBDFA606O_Lfs6bY3h1DukmLr-2wmXre4UtaNQZtLKcw4qK5mpA5D2NUCYPpNhAbYXHsgD8AfZ8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${text}&type=artist`, {headers});
  }

}
