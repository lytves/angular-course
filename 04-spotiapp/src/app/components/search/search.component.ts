import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  items: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(text: string) {
    this.loading = true;
    return this.spotifyService.getSearchArtists(text)
      .subscribe( (data: any) => {
        this.items = data;
        this.loading = false;
      } );
  }

}
