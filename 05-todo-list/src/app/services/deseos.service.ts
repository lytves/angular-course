import { Injectable } from '@angular/core';
import {Lista} from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const list1 = new Lista("Celebrate New Year with my family");
    const list2 = new Lista("Participate in the Marathon");

    this.listas.push(list1, list2);
    console.log(this.listas);
  }
}
