import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlertplaceholder]'
})
export class AlertplaceholderDirective {

  constructor(public viewcontainerRef:ViewContainerRef) { }

}
