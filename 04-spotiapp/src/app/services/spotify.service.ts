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
      'Authorization': 'Bearer BQBh2Iz6ursygWz337Wocw5jl6u8ftsnD3vKVYcMd1s2hPl-7Dk1hclHYTb2nT-CL9sRZyWUIZkycklEyQk'
    });
    return this.http.get(url, {headers});
  }

  getSpotifyToken() {
    const clientId = '5fa03b3f6205406f9b11936689035249';
    const clientSecret = '9d0d17fb3e7040c08394e0ef7a243559';
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
