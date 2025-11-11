import { Routes } from '@angular/router';
import { GameList } from './game-list/game-list'; // Keep eager (default)
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [

  { path: '', redirectTo: '/games', pathMatch: 'full' },

  { path: 'games', component: GameList },

  {
    path: 'games/:id',
    loadComponent: () =>
      import('./game-details/game-details').then(m => m.GameDetails)
  },

  {
    path: 'modify',
    loadComponent: () =>
      import('./modify-list-item/modify-list-item').then(m => m.ModifyListItem)
  },

  {
    path: 'modify/new',
    loadComponent: () =>
      import('./game-form/game-form').then(m => m.GameForm)
  },

  {
    path: 'modify/:id',
    loadComponent: () =>
      import('./game-form/game-form').then(m => m.GameForm)
  },

  { path: '**', component: PageNotFound }
];
