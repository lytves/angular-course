import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-artists-cards',
  templateUrl: './artists-cards.component.html',
  styleUrls: []
})
export class ArtistsCardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  viewArtist(item: any) {
    let artistId;
    if (item.type === 'artist') {
      artistId = item.id;
    } else if (item.type === 'album') {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }

}
