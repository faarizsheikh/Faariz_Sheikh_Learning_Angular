import { Component, signal } from '@angular/core';
import { MyData } from './models/my-data';
import { NgClass, NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('FaarizSheikhLearnAngular');

  games: MyData[] = [
    { id: 1, title: 'Granny 1', developer: 'DVloper (Dennis Vukanovic), DVapps AB',
      genre: 'Action-Adventure, Indie, Puzzle/Strategy, Survival Horror', yearReleased: 2017,
      platform: 'iPhone', isCompleted: true,
      notes: 'Spooky, suspenseful gameplay with multiple endings.'},
    { id: 2, title: 'Piggy: Book 1', developer: 'MiniToon (Kohl Couture), IK3As',
      genre: 'Action-Adventure, Episodic, Multiplayer, Puzzle/Strategy, Survival Horror', yearReleased: 2020,
      platform: 'Roblox', isCompleted: false,
      notes: 'Creative horror challenges with a memorable storyline.'},
    { id: 3, title: 'Baldi\'s Basics: Education & Learning', developer: 'Mystman12 (Micah McGonigal), Basically Games',
      genre: 'Action-Adventure, Educational, Indie, Puzzle/Strategy, Survival Horror', yearReleased: 2018,
      platform: 'PC', isCompleted: false,
      notes: 'Fun and quirky educational horror experience.'},
    { id: 4, title: 'Schoolboy Runaway', developer: 'Linked Squad',
      genre: 'Action-Adventure, Indie, Puzzle/Strategy, Stealth', yearReleased: 2024,
      platform: 'PC', isCompleted: true,
      notes: 'Stealth mechanics are unique and engaging.'},
    { id: 5, title: 'The Rainman', developer: 'CopperBolt (Daniel Weldink)',
      genre: 'Action-Adventure, Indie, Survival Horror', yearReleased: 2023,
      platform: 'PC', isCompleted: true,
      notes: 'Intense atmosphere with a gripping narrative.'},
    { id: 6, title: 'Assassin\'s Creed 1', developer: 'Ubisoft, Ubisoft Montréal',
      genre: 'Action-Adventure, Non-Linear, Open World, Stealth', yearReleased: 2007,
      platform: 'PlayStation 5', isCompleted: false,
      notes: 'Immersive historical settings with stealth mechanics and parkour-based exploration.'},
    { id: 7, title: 'Five Nights At Freddy\'s', developer: 'Scott Cawthon, Scottgames',
      genre: 'Action-Adventure, Graphic Adventure, Indie, Simulation, Survival Horror', yearReleased: 2014,
      platform: 'PC', isCompleted: true,
      notes: 'Tense jump-scare experience where players monitor cameras to survive animatronic attacks.'}
  ];

  toggleGameStatus(game: MyData): void {
    game.isCompleted = !game.isCompleted;
  }
}
