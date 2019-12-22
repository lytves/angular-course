import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {
  
  private heroesArr: Heroe[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router
   ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      // text - is defined in app.routes - { path: 'search/:text', component: SearchHeroComponent},
      // tslint:disable-next-line: no-string-literal
      this.heroesArr = this._heroesService.searchHeros(params['text']);
      document.querySelector('#seacrhText').value = '';
    });
  }

  showHeroe(index: number) {
    this._router.navigate( ['heroe', index] );
  }
}
