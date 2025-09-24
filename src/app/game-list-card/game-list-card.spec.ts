import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListCard } from './game-list-card';

describe('GameListCard', () => {
  let component: GameListCard;
  let fixture: ComponentFixture<GameListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameListCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
