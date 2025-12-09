import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFallbackImage]'
})
export class FallbackImageDirective {
  @Input() appFallbackImage: string = 'assets/no-img.jpeg'; // default fallback

  @HostListener('error', ['$event'])
  onError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.appFallbackImage;
  }
}
