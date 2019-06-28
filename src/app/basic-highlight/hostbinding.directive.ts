import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.fontSize') fontSize: string = '12px';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    this.fontSize = '12px';
  }

  @HostListener('click') onClick(eventData: Event) {
    this.fontSize = '24px';
  }
}
