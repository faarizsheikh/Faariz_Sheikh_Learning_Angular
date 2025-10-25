import {Component, OnInit} from "@angular/core";
import {MyData} from "../models/my-data";
import {GameListItem} from "../game-list-item/game-list-item";
import {GameDataService} from '../services/game-data';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem, RouterLink, GameListItem, NgForOf],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss']
})

export class GameList implements OnInit {
  games: MyData[] = [];

  constructor(private gameService: GameDataService) {}

  ngOnInit(): void {
    this.gameService.getAll().subscribe(data => this.games = data);
  }
}
