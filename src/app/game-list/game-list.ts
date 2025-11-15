import { Component, OnInit } from "@angular/core";
import { MyData } from "../models/my-data";
import { GameListItem } from "../game-list-item/game-list-item";
import { GameDataService } from '../services/game-data-service';
import { Router, RouterLink } from '@angular/router';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem, RouterLink, GameListItem, HoverHighlightDirective],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss']
})

export class GameList implements OnInit {
  games: MyData[] = [];
  errorMessage: string = '';
  loading = true;

  constructor(private gameService: GameDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.loading = true;
    this.errorMessage = '';

    this.gameService.getGames().subscribe({
      next: (data: MyData[]) => {
        this.games = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          '⚠️ Failed to load games. ' +
          'Try again later. ' +
          'If the issue persists, contact support at +1 (123) 456 7890.';
      }  // Decided to make it somewhat realistic by adding fake phone number.
    });
  }

  // DELETE button ➡ removes item from list
  deleteGame(game: MyData) {
    if (confirm(`Delete "${game.title}"?`)) {
      this.errorMessage = '';
      this.loading = true;

      this.gameService.deleteGame(game.id).subscribe({
        next: () => this.loadGames(),
        error: () => {
          this.loading = false;
          this.errorMessage =
            '⚠️ Could not delete game. ' +
            'Try again later. ' +
            'If the issue persists, contact support at +1 (123) 456 7890.';
        }
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
