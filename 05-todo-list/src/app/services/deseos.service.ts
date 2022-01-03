import {Injectable} from '@angular/core';
import {Lista} from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lists: Lista[] = [];

  constructor() {
    this.loadStorage();
  }

  createList(title: string) {
    const newList = new Lista(title);
    this.lists.push(newList);
    this.saveStorage();
    return newList.id;
  }

  getList(id: string | number) {
    id = Number(id);
    return this.lists.find(listData => listData.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if (localStorage.getItem("data") !== null) {
      this.lists = JSON.parse(localStorage.getItem("data"));
    } else {
      this.lists = [];
    }
  }
}
