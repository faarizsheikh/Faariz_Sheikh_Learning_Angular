import {Component, Input} from '@angular/core';
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
  // 👇 This makes [game] a valid input binding
  @Input() game!: MyData;
  @Input() isEven: boolean = false; // 👈 new input for alternating background

  toggleGameStatus(): void {
    this.game.isCompleted = !this.game.isCompleted;
  }
}
