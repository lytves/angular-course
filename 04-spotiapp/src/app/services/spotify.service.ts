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
      'Authorization': 'Bearer BQB5EyUBVotRAnHD9z89Vi5zYkNDB8qse-srGLIbI2RQfOzI1MjJyXrn1aME_NNCBIYJ_Th7HzWEjneLOfY'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getApiQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getSearchArtists(text: string) {
    return this.getApiQuery(`search?q=${text}&type=artist`).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getApiQuery(`artists/${id}`);
  }

  getArtistTopTracks(id: string) {
    return this.getApiQuery(`artists/${id}/top-tracks?country=US`).pipe(map(data => data['tracks']));
  }

}
