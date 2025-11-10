import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MyData} from '../models/my-data';
import {NgClass, TitleCasePipe} from '@angular/common';
import {NormalizeSpacesPipe} from '../pipes/custom-normalize-spaces.pipe';
import {CustomTitlecasePipe} from '../pipes/custom-titlecase.pipe';
import {CustomGameNameYearPipe} from '../pipes/custom-game-name-year.pipe';

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [
    NgClass,
    TitleCasePipe,
    NormalizeSpacesPipe,
    CustomTitlecasePipe,
    CustomGameNameYearPipe
  ],
  templateUrl: './game-list-item.html',
  styleUrls: ['./game-list-item.scss']
})

export class GameListItem {
  @Input() game?: MyData;
  @Input() isEven: boolean = false;

  @Output() selectGame = new EventEmitter<MyData>();
}
