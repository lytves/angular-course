import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  showHeroe() {
    // this.router.navigate(["heroe", this.index]);
    this.selectedHero.emit(this.index);
  }
}
