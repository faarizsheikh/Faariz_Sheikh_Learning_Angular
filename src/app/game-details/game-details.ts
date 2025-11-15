import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../services/game-data-service';
import { MyData } from '../models/my-data';
import { NormalizeSpacesPipe } from '../pipes/custom-normalize-spaces.pipe';
import { CustomTitlecasePipe } from '../pipes/custom-titlecase.pipe';
import { GameStatusColorPipe } from '../pipes/custom-game-status-colour.pipe';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, RouterLink, NormalizeSpacesPipe, CustomTitlecasePipe, GameStatusColorPipe],
  templateUrl: './game-details.html',
  styleUrls: ['./game-details.scss']
})

export class GameDetails implements OnInit {
  game?: MyData | null;
  loading = true;

  constructor(private route: ActivatedRoute, private gameService: GameDataService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGameById(Number(id)).subscribe({
        next: (game: MyData | undefined) => {
          this.game = game || null;
          this.loading = false;
        },
        error: () => {
          this.game = null;
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
      this.game = null;
    }
  }

  protected readonly isNaN = isNaN;
}
