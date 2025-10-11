import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MyData} from '../models/my-data';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-game-list-item',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './game-list-item.html',
  styleUrls: ['./game-list-item.css']
})
export class GameListItem {
  @Input() game?: MyData;
  @Input() isEven: boolean = false;

  @Output() selectGame = new EventEmitter<MyData>();
}
