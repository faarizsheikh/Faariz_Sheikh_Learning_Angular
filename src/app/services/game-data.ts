import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MyData} from '../models/my-data';
import {MOCK_CONTENT} from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {
  private games = MOCK_CONTENT;

  getAll(): Observable<MyData[]> {
    return of(this.games);
  }

  getById(id: number): Observable<MyData | undefined> {
    return of(this.games.find(game => game.id === id));
  }

  create(newGame: MyData): Observable<MyData[]> {
    this.games.push(newGame);
    return of(this.games);
  }

  update(updatedGame: MyData): Observable<MyData[]> {
    const index = this.games.findIndex(game => game.id === updatedGame.id);
    if (index > -1) {
      this.games[index] = updatedGame;
    }
    return of(this.games);
  }

  delete(id: number): Observable<MyData | undefined> {
    const index = this.games.findIndex(game => game.id === id);
    if (index > -1) {
      const removed = this.games.splice(index, 1)[0];
      return of(removed);
    }
    return of(undefined);
  }
}
