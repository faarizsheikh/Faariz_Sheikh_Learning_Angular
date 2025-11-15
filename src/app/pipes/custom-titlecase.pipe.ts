import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Titlecase'
})

export class CustomTitlecasePipe implements PipeTransform {
  /* Source used for pipes: https://angular.dev/guide/templates/pipes */
  transform(value: string): string {
    /* Source used for custom pipes: https://angular.dev/guide/templates/pipes#creating-custom-pipes */
    /**
     * Other things Inspired from:
     * https://angular.dev/api/common/TitleCasePipe
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     **/
    if (!value) return '';

    let titleCased = value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    /**
     * More used Sources:
     * https://stackoverflow.com/questions/15433188/what-is-the-difference-between-r-n-r-and-n
     * https://regex101.com/
     **/
    titleCased =
      titleCased.replace(/([(\[])(\s*)([a-z])/g, (_, bracket, spaces, letter) => {
        return bracket + spaces + letter.toUpperCase();
      });

    return titleCased

      /* Genres: */
      .replace(/\bFps\b/g, 'FPS')
      .replace(/\bdb\b/g, 'DB')

      /* Platforms: */
      .replace(/\bIos\b/g, 'iOS') /* Source for RegEx: */
      .replace(/\bPc\b/g, 'PC')
      .replace(/\broblox\b/g, 'Roblox')

      /* Non-title-cased words and New sentences */
      .replace(/\b And \b/g, ' and ')
      .replace(/\b In \b/g, ' in ')
      .replace(/\b The \b/g, ' the ')
  }
}
