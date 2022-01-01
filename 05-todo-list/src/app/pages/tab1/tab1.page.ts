import {Component} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) {
  }

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',

        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title) {
              this.deseosService.createList(data.title);
            }
          }
        }
      ]
    });

    alert.present();
  }
}
