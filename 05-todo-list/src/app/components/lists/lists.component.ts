import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Lista} from '../../models/lista.model';
import {Router} from '@angular/router';

import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList) ionList: IonList;
  @Input() completed = true;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) {
  }

  selectList(lista: Lista) {
    if (this.completed) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  removeList(id: number) {
    this.deseosService.removeList(id);
  }

  async editListTitle(id: number) {
    const lista = this.deseosService.lists.filter(listaData => listaData.id === id)[0];

    const alert = await this.alertController.create({
      header: 'Edit List Title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: lista.title
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.ionList.closeSlidingItems();
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if (data.title && data.title !== lista.title) {
              lista.title = data.title;
              this.deseosService.saveStorage();
            }
            this.ionList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }

  ngOnInit() {
  }

}
