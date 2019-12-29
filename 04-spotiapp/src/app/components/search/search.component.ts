import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  items: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(text: string) {
    return this.spotifyService.getSearchArtists(text)
      .subscribe( (data: any) => {
        this.items = data.artists.items;
      } );
  }

}
