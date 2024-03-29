import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListsComponent} from './lists/lists.component';
import {IonicModule} from '@ionic/angular';
import {PipesModule} from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ListsComponent,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
