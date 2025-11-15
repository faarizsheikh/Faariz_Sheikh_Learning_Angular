import { Pipe, PipeTransform } from '@angular/core';
import { MyData } from "../models/my-data";

@Pipe({
  name: 'GamenameYear'
})

export class CustomGameNameYearPipe implements PipeTransform {
  /**
   * Source from your slides - MAD307-25F-002 JS FRAMEWORKS Fall 2025 - 002 (WEEK 10),
   * specially the part about user's full name (firstName + lastName)
   * OTHER SOURCES USED:
   * https://angular.dev/guide/templates/pipes
   * https://angular.dev/guide/templates/pipes#creating-custom-pipes
   **/
  transform(game: MyData): string {
    if (!game) return '';
    /**
     * Ternary operator usage:
     * condition ? valueIfTrue : valueIfFalse
     * Here, checks if yearReleased exists:
     * If yes, returns "title (yearReleased)"
     * If no, returns just "title"
     */
    return game.yearReleased ? `${game.title} (${game.yearReleased})` : game.title;
  }
}
