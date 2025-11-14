import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GamestatusColor',
  pure: true
})
export class GameStatusColorPipe implements PipeTransform {
  transform(value: any, mode: 'status' | 'price'): string {

    if (mode === 'status') {
      return value ? 'green' : 'red';
    }

    if (mode === 'price') {
      const price = Number(value);

      if (isNaN(price)) return 'white';

      return price > 5 ? 'orange' : 'dodgerblue';
    }
    return 'white';
  }
}
