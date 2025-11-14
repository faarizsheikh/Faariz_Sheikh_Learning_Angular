import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {MOCK_CONTENT} from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      return { games: MOCK_CONTENT };
  }
}
