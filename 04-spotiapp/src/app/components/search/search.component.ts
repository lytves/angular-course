import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchText: string;
  items: any[] = [];
  loading: boolean;
  errorService: boolean;
  errorServiceMsg: string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  search(text: string) {
    this.loading = true;
    this.searchText = text;
    return this.spotifyService.getSearchArtists(text)
      .subscribe( (data: any) => {
        this.items = data;
        this.loading = false;
      }, (error) => {
        this.errorService = true;
        this.loading = false;
        this.errorServiceMsg = error.error.error.message;
      } );
  }

}
