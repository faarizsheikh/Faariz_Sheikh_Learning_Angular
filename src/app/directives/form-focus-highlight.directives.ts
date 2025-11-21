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
  @Input() appOnFocusHighlight?: string;

  constructor(private el: ElementRef) { }

  @HostListener('focus')
  onFocus() {
    const color = this.appOnFocusHighlight?.trim() || 'cyan';
    this.el.nativeElement.style.outline = `2px solid ${color}`;
  }

  @HostListener('blur')
  onBlur() { // Element receives focus
    this.el.nativeElement.style.outline = '';
  }
}
