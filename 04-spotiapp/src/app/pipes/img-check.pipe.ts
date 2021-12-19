import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'imgCheck'
})
export class ImgCheckPipe implements PipeTransform {

  transform(images: any[]): string {
    if (images && images.length) {
      return images[0].url;
    }
    return 'assets/img/noimage.png';
  }

}
