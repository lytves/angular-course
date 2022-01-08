import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  errorService: boolean;
  errorServiceMsg: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.errorService = false;

    this.spotifyService.getNewReleases()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.newReleases = data;
      }, (error) => {
        this.errorService = true;
        console.error('error', error);
        this.errorServiceMsg = (error && error.error && error.error.message ? error.error.message : '');
      });
  }

  ngOnInit() {
  }

}
