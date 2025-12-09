import { Component, OnInit } from "@angular/core";
import { GameDataService } from '../services/game-data-service';
import { GameListItem } from "../game-list-item/game-list-item";
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MyData } from "../models/my-data";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem, MatIconModule, MatMiniFabButton, MatTooltip, RouterLink, RouterLinkActive, MatSelect, MatFormField, MatLabel, MatOption, MatFormField, MatOption, MatIconButton],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.scss'],
  host: { class: 'page-game-list' }
})

export class GameList implements OnInit {
  games: MyData[] = [];
  filteredGames: MyData[] = [];
  originalGames: MyData[] = [];
  errorMessage: string = '';
  loading = true;

  sortField: 'none' | 'title' | 'yearReleased' | 'developer' = 'none';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private gameService: GameDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.loading = true;
    this.errorMessage = '';

    this.gameService.getGames().subscribe({
      next: (data: MyData[]) => {
        this.games = data;
        this.originalGames = [...data]; // save original order
        this.filteredGames = [...data]; // initially show all games
        this.applySorting();             // apply current sort if not "none"
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage =
          '⚠️ Failed to load games. ' +
          'Try again later. ' +
          'If the issue persists, contact support at +1 (123) 456 7890.';
      }
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

  applySorting() {
    if (this.sortField === 'none') {
      // Restore original order
      this.filteredGames = [...this.originalGames];
      return;
    }

    this.filteredGames = [...this.games].sort((a, b) => {
      let compareValue;

      if (this.sortField === 'title') {
        compareValue = a.title.localeCompare(b.title);
      } else if (this.sortField === 'developer') {
        compareValue = a.developer.localeCompare(b.developer);
      } else { // yearReleased
        compareValue = a.yearReleased - b.yearReleased;
      }

      return this.sortOrder === 'asc' ? compareValue : -compareValue;
    });
  }

  toggleSortOrder() {
    if (this.sortField !== 'none') {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.applySorting();
    }
  }
}
