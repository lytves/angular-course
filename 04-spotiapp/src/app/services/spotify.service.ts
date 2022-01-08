import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getApiQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCuYJewrSzyYp6o6E-OM0nsOc5d2ZQN5lozDU2ukVkJoCEpcH4lupUU7oP9JS4IS9i8hERpJ1FOkeNNtEQ'
    });
    return this.http.get(url, {headers});
  }

  getSpotifyToken() {
    const clientId = 'YOUR_CLIENT_ID';
    const clientSecret = 'YOUR_CLIENT_SECRET';
    return this.http.post('https://accounts.spotify.com/api/token', {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    })
      .pipe(
        map((data: any) => {
          console.log(`Bearer ${data.access_token}`);
          localStorage.setItem('token', `Bearer ${data.access_token}`);
        }));
  }

  getNewReleases() {
    return this.getApiQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getSearchArtists(text: string) {
    return this.getApiQuery(`search?q=${text}&type=artist`).pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getApiQuery(`artists/${id}`);
  }

  getArtistTopTracks(id: string) {
    return this.getApiQuery(`artists/${id}/top-tracks?country=US`).pipe(map((data: any) => data.tracks));
  }

}
