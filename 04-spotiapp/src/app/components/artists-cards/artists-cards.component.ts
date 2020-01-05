import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artists-cards',
  templateUrl: './artists-cards.component.html',
  styleUrls: []
})
export class ArtistsCardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
