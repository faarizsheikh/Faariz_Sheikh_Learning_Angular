import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {MyData} from "../models/my-data";
import {GameListItem} from "../game-list-item/game-list-item";
import {GameDataService} from '../services/game-data';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameListItem],
  templateUrl: './game-list.html',
  styleUrls: ['./game-list.css']
})

export class GameList implements OnInit {
  games: MyData[] = [];
  @Output() selectGame = new EventEmitter<MyData>(); // New output


  constructor(private gameService: GameDataService) {}

  ngOnInit(): void {
    this.gameService.getAll().subscribe(data => this.games = data);
  }

  onGameSelected(game: MyData) {
    this.selectGame.emit(game); // propagate to AppComponent
  }
}
