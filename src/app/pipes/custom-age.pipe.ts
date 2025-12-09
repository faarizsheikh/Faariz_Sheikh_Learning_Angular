import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AgeyearPipe'
})

export class AgePipe implements PipeTransform {
  transform(age: number): string {
    if (age == null) {
      return 'N/A';
    }

    return `${age}+`;
  }
}
