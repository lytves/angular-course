import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input('appHighlighted') newColor: string = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') mouseEnter() {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
    this.highlighted(this.newColor || "lightblue")
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  private highlighted(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
