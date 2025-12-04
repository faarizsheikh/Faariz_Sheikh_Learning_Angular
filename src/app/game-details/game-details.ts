import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomTitlecasePipe } from '../pipes/custom-titlecase.pipe';
import { GameDataService } from '../services/game-data-service';
import { GameStatusColorPipe } from '../pipes/custom-game-status-colour.pipe';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { MyData } from '../models/my-data';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { NormalizeSpacesPipe } from '../pipes/custom-normalize-spaces.pipe';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule, CustomTitlecasePipe, GameStatusColorPipe, MatIcon, MatTooltip, NormalizeSpacesPipe, RouterLink, HoverHighlightDirective],
  templateUrl: './game-details.html',
  styleUrls: ['./game-details.scss']
})

export class GameDetails implements OnInit {
  game?: MyData | null;
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private gameService: GameDataService) { }

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

  editGame(game: MyData) {
    this.router.navigate(['/modify', game.id]);
  }

  protected readonly isNaN = isNaN;
}
