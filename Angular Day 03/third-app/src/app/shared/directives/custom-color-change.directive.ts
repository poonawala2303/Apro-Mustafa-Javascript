import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomColorChange]',
  standalone: false
})
export class CustomColorChangeDirective {

  constructor(private element1:ElementRef) {
    this.element1.nativeElement.style.color="red";
    this.element1.nativeElement.style.textAlign="center";
   }

}
