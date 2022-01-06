import {Component, Input, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() completed = true;

  constructor(public deseosService: DeseosService,
              private router: Router) {
  }

  selectList(lista: Lista) {
    if (this.completed) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  ngOnInit() {
  }

}
