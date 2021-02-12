import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyRed]'
})
export class MyRedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
