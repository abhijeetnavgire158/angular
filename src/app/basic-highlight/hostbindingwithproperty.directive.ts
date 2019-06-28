import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostbindingwithproperty]'
})
export class HostbindingwithpropertyDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
  
}
