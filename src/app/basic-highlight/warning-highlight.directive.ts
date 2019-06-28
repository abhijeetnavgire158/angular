import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appWarning]'
})

export class WarningHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef ,private Renderer: Renderer2){

    }

    ngOnInit() {
        this.Renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    }
}