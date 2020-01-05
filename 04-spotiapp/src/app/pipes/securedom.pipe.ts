import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'securedom'
})
export class SecuredomPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }

  transform(spotifyUri: string): SafeResourceUrl {
    const spotifyUrlArr = spotifyUri.split(':');
    const url = `https://open.${spotifyUrlArr[0]}.com/embed/${spotifyUrlArr[1]}/${spotifyUrlArr[2]}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
