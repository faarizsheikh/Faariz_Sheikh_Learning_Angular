import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/** Main sources:
 * https://angular.dev/guide/directives/attribute-directives
 * Professor's slides (Week 11)
 **/

@Directive({
  selector: '[appOnFocusHighlight]',
  standalone: true,
})

export class HighlightOnFocusDirective {
  @Input() appOnFocusHighlight: string = 'lightblue';

  constructor(private el: ElementRef) { }

  @HostListener('focus')
  onFocus() {
    this.el.nativeElement.style.outline = `2px solid ${this.appOnFocusHighlight}`;
  }

  @HostListener('blur')
  onBlur() {
    this.el.nativeElement.style.outline = '';
  }
}
