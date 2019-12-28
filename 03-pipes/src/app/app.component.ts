import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Alexander';

  name2 = 'alexAnder romarIO GOMEz';

  array: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  p = 0.234;

  salary = 1230.45;

  hero = {
    name: 'Bruce Wayne',
    nickname: 'Batman',
    age: 39,
    address: {
      city: 'Gotham',
      appartment: 'Wayne Tower'
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise has come!'), 3000);
  });

  today = new Date();

  video = 'IMTIApt1T_Y';
  //

}
