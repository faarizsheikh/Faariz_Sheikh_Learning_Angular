import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { MyData } from '../models/my-data';

@Injectable({
  providedIn: 'root'
})

export class GameDataService {
  private apiUrl = 'api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<MyData[]> {
    return this.http.get<MyData[]>(this.apiUrl);
  }

  getGameById(id: number): Observable<MyData> {
    return this.http.get<MyData>(`${this.apiUrl}/${id}`);
  }

  addGame(game: MyData): Observable<MyData> {
    return this.getGames().pipe(
      map(games => {
        const maxId = games.length > 0 ? Math.max(...games.map(g => g.id)) : 0;
        return { ...game, id: maxId + 1 };
      }),
      switchMap(gameWithId => this.http.post<MyData>(this.apiUrl, gameWithId))
    );
  }

  updateGame(game: MyData): Observable<MyData> {
    return this.http.put<MyData>(`${this.apiUrl}/${game.id}`, game);
  }

  deleteGame(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
