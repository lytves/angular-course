import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe( params => {
      // id - is defined in app.routes - { path: 'heroe/:id', component: HeroeComponent}
          this.heroe = this._heroesService.getHeroe( params['id'] );
    } );
   }

  ngOnInit() {
  }

}
