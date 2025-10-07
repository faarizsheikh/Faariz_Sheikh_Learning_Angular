import { Component } from '@angular/core';
import { GameList } from './game-list/game-list';
import { GameListItem } from './game-list-item/game-list-item';
import { GameDataService } from './services/game-data';
import { MyData } from './models/my-data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameList, GameListItem, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  singleGame?: MyData;

  constructor(private gameService: GameDataService) {}

  ngOnInit(): void {
    // Example: load a single game
    this.gameService.getById(3).subscribe(game => {
      this.singleGame = game;
      console.log('Loaded single game:', this.singleGame);
    });

    // Run your CRUD test
    this.testCRUD();
  }

  testCRUD() {
    // 1. Create a new game
    const newGame: MyData = { id: 11, title: 'Clumsy Ninja', developer: 'NaturalMotion',
      genre: 'Action-Adventure, Simulation', yearReleased: 2013, platform: "iPhone",
      isCompleted: false, imageUrl: 'assets/baby_yellow.jpeg'};
    this.gameService.create(newGame).subscribe(allGames => {
      console.log('After create:', allGames);

      // 2. Update the new game
      const updatedGame = { ...newGame, title: 'Updated Test Game' };
      this.gameService.update(updatedGame).subscribe(allGames => {
        console.log('After update:', allGames);

        // 3. Delete the game
        this.gameService.delete(updatedGame.id).subscribe(removed => {
          console.log('Removed game:', removed);

          // 4. Final list
          this.gameService.getAll().subscribe(allGames => {
            console.log('Final game list:', allGames);
          });
        });
      });
    });
  }
}
