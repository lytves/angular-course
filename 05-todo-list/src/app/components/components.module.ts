import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListsComponent} from './lists/lists.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule],
  exports: [
    ListsComponent,
    IonicModule

  ]
})
export class ComponentsModule { }
