import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/** Main sources:
 * https://angular.dev/guide/directives/attribute-directives
 * Professor's slides (Week 11)
 **/

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})

export class HoverHighlightDirective {

  @Input() appHoverHighlight: string = '';

  constructor(private el: ElementRef) { }

  // Source for Host Listener: https://angular.dev/api/core/HostListener
  @HostListener('mouseenter')
  onMouseEnter() {
    this.setTextColor(this.appHoverHighlight || 'blue');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setTextColor('');
  }

  private setTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
