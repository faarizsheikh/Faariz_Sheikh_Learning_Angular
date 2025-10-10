import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';
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

  constructor(private gameService: GameDataService) {}

  ngOnInit(): void {
    this.gameService.getAll().subscribe(data => this.games = data);
  }

  toggleStatus(game: MyData) {
    const updated = { ...game, isCompleted: !game.isCompleted };
    this.gameService.update(updated).subscribe();
  }
}
