import { Component, OnInit } from "@angular/core";
import { MyData } from "../models/my-data";
import { GameListItem } from "../game-list-item/game-list-item";
import { GameDataService } from '../services/game-data';
import { Router, RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem, RouterLink, NgForOf],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss']
})

export class GameList implements OnInit {
  games: MyData[] = [];

  constructor(private gameService: GameDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getAll().subscribe(data => this.games = data);
  }

  // EDIT button ➡ opens form for existing game
  editGame(game: MyData) {
    this.router.navigate(['/modify', game.id]);
  }

  // DELETE button ➡ removes item from list
  deleteGame(game: MyData) {
    if (confirm(`Delete "${game.title}"?`)) {
      this.gameService.delete(game.id).subscribe(() => this.loadGames());
    }
  }

  // ADD button ➡ creates new game
  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
