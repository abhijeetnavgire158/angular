import { Directive, Input, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef ) { }

}
