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
  loading: boolean = false;

  constructor() {
  }

  executeLoading() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  ngOnInit(): void {
  }

}
