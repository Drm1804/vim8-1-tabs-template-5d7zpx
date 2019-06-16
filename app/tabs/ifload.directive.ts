import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
 
@Directive({ selector: '[ifLoad]' })
export class IfLoadDirective {
     
    constructor(private templateRef: TemplateRef<any>, 
                private viewContainer: ViewContainerRef) 
    { }

    private wasLoad = false;
     
    @Input() set ifLoad(condition: boolean) {
      if(condition && !this.wasLoad) {
        this.wasLoad = true;
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
}
