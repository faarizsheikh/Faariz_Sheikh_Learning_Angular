import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return new Observable<MyData>((observer) => {
      this.getGames().subscribe({
        next: (games) => {
          const maxId = games.length > 0 ? Math.max(...games.map(g => g.id)) : 0;
          const gameWithId = { ...game, id: maxId + 1 };

          this.http.post<MyData>(this.apiUrl, gameWithId).subscribe({
            next: (addedGame) => {
              observer.next(addedGame);
              observer.complete();
            },
            error: (err) => observer.error(err)
          });
        },
        error: (err) => observer.error(err)
      });
    });
  }

  updateGame(game: MyData): Observable<MyData> {
    return this.http.put<MyData>(`${this.apiUrl}/${game.id}`, game);
  }

  deleteGame(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
