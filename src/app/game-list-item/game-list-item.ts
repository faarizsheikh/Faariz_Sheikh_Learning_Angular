import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyData } from '../models/my-data';
import { TitleCasePipe } from '@angular/common';
import { NormalizeSpacesPipe } from '../pipes/custom-normalize-spaces.pipe';
import { CustomTitlecasePipe } from '../pipes/custom-titlecase.pipe';
import { CustomGameNameYearPipe } from '../pipes/custom-game-name-year.pipe';
import { EvenOddHighlightDirective } from '../directives/even-odd-highlight.directive';

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [
    TitleCasePipe,
    NormalizeSpacesPipe,
    CustomTitlecasePipe,
    CustomGameNameYearPipe,
    EvenOddHighlightDirective
  ],
  templateUrl: './game-list-item.html',
  styleUrls: ['./game-list-item.scss']
})

export class GameListItem {
  @Input() game?: MyData;
  @Input() isEven: boolean = false;

  @Output() selectGame = new EventEmitter<MyData>();
}
