import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getApiQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDaOLR3a8faSrgqVecdMBuikaOg4hvVy3VnFHu4hj9BxeNX6LsXA-4tKRbtM6oraYTw0f9saDS5JpI84c'
    });

    return this.http.get(url, {headers});
  }
  getNewReleases() {
    return this.getApiQuery('browse/new-releases').pipe(map ( data => data['albums'].items));
  }

  getSearchArtists(text: string) {
    return this.getApiQuery(`search?q=${text}&type=artist`).pipe(map(data => data['artists'].items));
  }

}
