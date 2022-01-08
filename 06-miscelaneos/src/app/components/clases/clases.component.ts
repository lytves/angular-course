import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})

export class ClasesComponent implements OnInit {

  alert: string = 'alert-info';
  props = {
    danger: false
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
