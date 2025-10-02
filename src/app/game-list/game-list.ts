import {Component, OnInit} from "@angular/core";
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

  constructor(private gameService: GameDataService) {}

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
