import { Component, signal } from '@angular/core';
import { GameList } from './game-list/game-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('FaarizSheikhLearnAngular');

}
