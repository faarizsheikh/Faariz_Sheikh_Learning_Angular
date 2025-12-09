import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GameratingStar'
})

export class RatingPipe implements PipeTransform {
  transform(value: number): string {

    if (value === null || isNaN(value)) {
      return '☆☆☆☆☆';
    }

    const fullStars = Math.floor(value);
    const halfStars = value % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return '★'.repeat(fullStars) + (halfStars ? '⯪' : '') + '☆'.repeat(emptyStars);
  }
}
