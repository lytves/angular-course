import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    activatedRoute.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getArtistTopTracks(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getArtistTopTracks(id: string) {
    this.spotifyService.getArtistTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }

}
