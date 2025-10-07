import { TestBed } from '@angular/core/testing';
import { GameDataService } from './game-data';
import { MyData } from '../models/my-data';

describe('GameDataService', () => {
  let service: GameDataService;

  const makeGame = (id: number, title: string): MyData => ({
    id,
    title,
    developer: 'Test Dev',
    genre: 'Action',
    yearReleased: 2024,
    platform: 'PC',
    isCompleted: false,
    imageUrl: 'https://example.com/test.jpg',
    notes: 'optional notes'
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a game (CREATE)', (done) => {
    const game = makeGame(1, 'Test Game');
    service.create(game).subscribe(games => {
      expect(games.some(g => g.id === game.id)).toBeTrue();
      done();
    });
  });

  it('should return all games (READ)', (done) => {
    const game1 = makeGame(2, 'Game 1');
    const game2 = makeGame(3, 'Game 2');

    service.create(game1).subscribe(() => {
      service.create(game2).subscribe(() => {
        service.getAll().subscribe(games => {
          expect(games.length).toBeGreaterThanOrEqual(2);
          done();
        });
      });
    });
  });

  it('should update a game (UPDATE)', (done) => {
    const game = makeGame(4, 'Old Title');
    service.create(game).subscribe(() => {
      const updated = { ...game, title: 'New Title', isCompleted: true };
      service.update(updated).subscribe(games => {
        const found = games.find(g => g.id === 4);
        expect(found?.title).toBe('New Title');
        expect(found?.isCompleted).toBeTrue();
        done();
      });
    });
  });

  it('should delete a game (DELETE)', (done) => {
    const game = makeGame(5, 'Delete Me');
    service.create(game).subscribe(() => {
      service.delete(5).subscribe(removed => {
        expect(removed?.id).toBe(5);
        service.getById(5).subscribe(result => {
          expect(result).toBeUndefined();
          done();
        });
      });
    });
  });

  it('should get a single game by id', (done) => {
    const game = makeGame(6, 'Find Me');
    service.create(game).subscribe(() => {
      service.getById(6).subscribe(result => {
        expect(result).toEqual(game);
        done();
      });
    });
  });
});
