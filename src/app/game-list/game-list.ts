import { Component, OnInit } from "@angular/core";
import { MyData } from "../models/my-data";
import { GameListItem } from "../game-list-item/game-list-item";
import { GameDataService } from '../services/game-data';
import { Router, RouterLink } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem, RouterLink, NgForOf, NgIf],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss']
})

export class GameList implements OnInit {
  games: MyData[] = [];
  errorMessage: string = '';

  constructor(private gameService: GameDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.errorMessage = '';
    this.gameService.getGames().subscribe({
      next: (data: MyData[]) => this.games = data,
      error: () =>
        this.errorMessage =
          '⚠️ Failed to load games.' +
          'Try again later.' +
          'If the issue still persists, contact support at +1 (123) 456 7890.'
    }); // Decided to make it somewhat realistic.
  }

  // DELETE button ➡ removes item from list
  deleteGame(game: MyData) {
    if (confirm(`Delete "${game.title}"?`)) {
      this.errorMessage = '';
      this.gameService.deleteGame(game.id).subscribe({
        next: () => this.loadGames(),
        error: () =>
          this.errorMessage =
            '⚠️ Could not delete game.' +
            'Try again later.' +
            'If the issue still persists, contact support at +1 (123) 456 7890.'
      });
    }
  }

  // ADD button ➡ creates new game
  addNewGame() {
    this.router.navigate(['/modify/new']);
  }

  // EDIT button ➡ opens form for existing game
  editGame(game: MyData) {
    this.router.navigate(['/modify', game.id]);
  }
}
