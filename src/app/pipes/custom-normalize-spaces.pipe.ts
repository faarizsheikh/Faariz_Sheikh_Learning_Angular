import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Normalizespaces'
})

export class NormalizeSpacesPipe implements PipeTransform {
  transform(value: string): string {
    /**
     * Sources:
     * https://angular.dev/guide/templates/pipes
     * https://angular.dev/guide/templates/pipes#creating-custom-pipes
     **/
    if (!value) return value;

    const leading = value.match(/^\s*/)?.[0] ?? '';
    const trailing = value.match(/\s*$/)?.[0] ?? '';
    const middle = value.trim().replace(/\s{2,}/g, ' ');

    return leading + middle + trailing;
  }
}
