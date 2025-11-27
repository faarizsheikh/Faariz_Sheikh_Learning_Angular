import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appOnFocusHighlight]',
  standalone: true,
})
export class HighlightOnFocusDirective {
  @Input() appOnFocusHighlight?: string;        // normal focus color
  @Input() appOnFocusHighlightInvalid?: string; // invalid color

  constructor(private el: ElementRef, private control: NgControl) { }

  private findMaterialField(): HTMLElement | null {
    let parent = this.el.nativeElement.parentElement;
    while (parent) {
      if (parent.classList.contains('mdc-text-field')) return parent;
      parent = parent.parentElement;
    }
    return null;
  }

  @HostListener('focus')
  onFocus() {
    const matField = this.findMaterialField();
    if (matField) {
      matField.style.backgroundColor = this.control?.control?.invalid && this.control?.control?.touched
        ? this.appOnFocusHighlightInvalid?.trim() || '#4d5554'
        : this.appOnFocusHighlight?.trim() || 'grey';
    }
  }

  @HostListener('blur')
  onBlur() {
    const matField = this.findMaterialField();
    if (matField) {
      matField.style.backgroundColor = '';
    }
  }
}
