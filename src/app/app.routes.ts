import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list';
import { ModifyListItem } from './modify-list-item/modify-list-item';
import { GameForm } from './game-form/game-form';
import { PageNotFound } from './page-not-found/page-not-found';
import { GameDetails } from './game-details/game-details';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameList },
  { path: 'games/:id', component: GameDetails },
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/new', component: GameForm },
  { path: 'modify/:id', component: GameForm },
  { path: '**', component: PageNotFound }
];
