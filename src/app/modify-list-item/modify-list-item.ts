import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit {
  games: MyData[] = [];

  constructor(private gameService: GameDataService, private router: Router) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getAll().subscribe(data => (this.games = data));
  }

  // NAVIGATE: To edit form
  editGame(game: MyData) {
    this.router.navigate(['/modify', game.id]); // Returns to GameForm for editing
  }

  // DELETE: An item
  deleteGame(game: MyData) {
    if (confirm(`Delete "${game.title}"?`)) {
      this.gameService.delete(game.id).subscribe(() => this.loadGames());
    }
  }

  // ADD: Redirects to form for editing
  addNewGame() {
    this.router.navigate(['/modify/new']);
  }

  // STATUS: Shown directly in list
  toggleStatus(game: MyData) {
    const updated = { ...game, isCompleted: !game.isCompleted };
    this.gameService.update(updated).subscribe(() => this.loadGames());
  }
}
