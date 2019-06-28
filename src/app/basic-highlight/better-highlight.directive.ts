import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elementRef: ElementRef, private Renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.Renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.Renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
