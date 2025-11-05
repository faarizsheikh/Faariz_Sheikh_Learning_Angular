import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-details.html',
  styleUrls: ['./game-details.scss']
})

export class GameDetails implements OnInit {
  game?: MyData;

  constructor(private route: ActivatedRoute, private gameService: GameDataService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(Number(id)).subscribe((game: MyData) => {
        this.game = game;
      });
    }
  }

}
