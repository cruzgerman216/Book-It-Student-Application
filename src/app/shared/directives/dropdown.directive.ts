import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor(elementRef: ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log("test")
  }
}