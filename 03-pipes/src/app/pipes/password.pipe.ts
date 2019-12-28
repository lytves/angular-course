import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, show: boolean = true): string {
    console.warn(show);
    return show ? value : '***';
  }
}
