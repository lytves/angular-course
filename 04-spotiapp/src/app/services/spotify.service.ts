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
      'Authorization': 'Bearer BQDbLPCyP4G3h9l7cN7nnzDqpkB5SE_cWMzKYXbfCCXj_kvT6N6-WSNJIoLbn2gNrqSfqCEhT8DWLeU2jnw'
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

}
