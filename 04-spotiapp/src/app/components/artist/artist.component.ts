import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  errorService: boolean;
  errorServiceMsg: string;
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {
    activatedRoute.params
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(params => {
        this.getArtist(params['id']);
        this.getArtistTopTracks(params['id']);
      });
  }

  ngOnInit() {
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(artist => {
        this.artist = artist;
      }, (error) => {
        this.errorService = true;
        this.errorServiceMsg = error.error.error.message;
      });
  }

  getArtistTopTracks(id: string) {
    this.spotifyService.getArtistTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }

}
