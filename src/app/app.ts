import { Component } from '@angular/core';
import { GameList } from './game-list/game-list';
import {GameListItem} from './game-list-item/game-list-item';
import { GameDataService } from './services/game-data';   // your service
import { MyData } from './models/my-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameList, GameListItem, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  singleGame?: MyData;   // will hold just one game

  constructor(private gameService: GameDataService) {
  }

  ngOnInit(): void {
    this.gameService.getById(3).subscribe(game => {
      this.singleGame = game;
    });
  }
}
