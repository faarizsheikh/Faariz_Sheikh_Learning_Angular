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
}
