import {Injectable} from '@angular/core';
import {Lista} from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new Lista(title);
    this.listas.push(newList);
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage() {
    if (localStorage.getItem("data") !== null) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }
}
