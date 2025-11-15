import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

/** Main sources:
 * https://angular.dev/guide/directives/attribute-directives
 * Professor's slides (Week 11)
 **/

@Directive({
  selector: '[appEvenOddHighlight]',
  standalone: true
})

export class EvenOddHighlightDirective implements OnInit {

  @Input() appEvenOddHighlight: boolean = false;

  private evenBg = '#330';
  private oddBg = '#333';
  private evenHoverH2 = '#ffcc00';
  private oddHoverH2 = '#00bfff';
  private defaultH2Color = '#fff';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    host.style.backgroundColor = this.appEvenOddHighlight ? this.evenBg : this.oddBg;

    const h2s = host.querySelectorAll('h2');
    h2s.forEach(h => (h as HTMLElement).style.color = this.defaultH2Color);
  }

  // Source for Host Listener: https://angular.dev/api/core/HostListener
  @HostListener('mouseenter')
  onEnter(): void {
    const host = this.el.nativeElement as HTMLElement;

    const hoverColor =
      this.appEvenOddHighlight ? this.evenHoverH2 : this.oddHoverH2;

    const h2s = host.querySelectorAll('h2');
    h2s.forEach(h => (h as HTMLElement).style.color = hoverColor);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    const host = this.el.nativeElement as HTMLElement;

    const h2s = host.querySelectorAll('h2');
    h2s.forEach(h => (h as HTMLElement).style.color = this.defaultH2Color);
  }
}
