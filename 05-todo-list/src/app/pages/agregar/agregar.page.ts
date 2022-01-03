import {Component, OnInit} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {ActivatedRoute} from '@angular/router';
import {Lista} from '../../models/lista.model';
import {ListaItem} from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  itemName: string = "";

  constructor(private deseosService: DeseosService,
              private route: ActivatedRoute) {
    const listId = this.route.snapshot.paramMap.get('listId');
    this.lista = this.deseosService.getList(listId);
  }

  agregarItem() {
    if (!this.itemName.length) {
      return
    }
    const newItem = new ListaItem(this.itemName);
    this.lista.items.push(newItem);
    this.deseosService.saveStorage();
    this.itemName = "";
  }

  ngOnInit() {
  }

}
