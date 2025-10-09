// app.routes.ts
import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list';
import { GameListItem } from './game-list-item/game-list-item';

export const routes: Routes = [
  { path: '', component: GameList },
  { path: 'game/:id', component: GameListItem },
];
