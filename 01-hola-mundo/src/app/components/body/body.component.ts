import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    frase: any = {
      mensaje: "El gran poder es una gran responsabilidad",
      autor: "Ben Parker"

    };
    mostrar = true;
    personajes: string[] = ['Spiderman', 'Joker', 'Batman'];
}
