import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ExperienceyearPipe'
})

export class ExperiencePipe implements PipeTransform {
  transform(value: any): string {
    // N/A cases
    if (value === null || value === undefined) {
      return 'N/A';
    }

    const num = Number(value);

    if (isNaN(num)) return 'N/A';

    if (num === 0) {
      return 'New Gamer';
    }

    if (num === 1) {
      return '1 Year';
    }

    return `${num} Years`;
  }
}
