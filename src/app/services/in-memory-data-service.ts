import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MyData } from '../models/my-data';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb(): { games: MyData[] } {
    const games: MyData[] = [
      {
        id: 1,
        title: "Granny 1",
        developer: "DVloper (Dennis Vukanovic), DVapps AB",
        genre: "Action-Adventure, Indie, Puzzle/Strategy, Survival Horror",
        yearReleased: 2017,
        platform: "iOS",
        isCompleted: true,
        notes: "Spooky, suspenseful gameplay with multiple endings.",
        imageUrl: "assets/granny.jpeg"
      },
      {
        id: 2,
        title: "Boom Beach",
        developer: "SuperCell, Space Ace Games",
        genre: "Real-Time Strategy, Shooter",
        yearReleased: 2014,
        platform: "iOS",
        isCompleted: false,
        notes: "One of the most balanced mobile strategy games I’ve played.",
        imageUrl: "assets/boom_beach.jpeg"
      },
      {
        id: 3,
        title: "Five Nights At Freddy's",
        developer: "Scott Cawthon, Scottgames",
        genre: "Action-Adventure, Graphic Adventure, Indie, Simulation, Survival Horror",
        yearReleased: 2014,
        platform: "PC",
        isCompleted: true,
        notes: "Tense jump-scare experience where players monitor cameras to survive animatronic attacks.",
        imageUrl: "assets/five_nights_at_freds.jpeg"
      },
      {
        id: 4,
        title: "Assassin's Creed 1",
        developer: "Ubisoft, Ubisoft Montréal",
        genre: "Action-Adventure, Non-Linear, Open World, Stealth",
        yearReleased: 2007,
        platform: "PlayStation 5",
        isCompleted: false,
        notes: "Immersive historical settings with stealth mechanics and parkour-based exploration.",
        imageUrl: "assets/assassins_creed.jpeg"
      },
      {
        id: 5,
        title: "The Rainman",
        developer: "CopperBolt (Daniel Weldink)",
        genre: "Action-Adventure, Indie, Survival Horror",
        yearReleased: 2023,
        platform: "PC",
        isCompleted: true,
        notes: "Intense atmosphere with a gripping narrative.",
        imageUrl: "assets/the_rainman-game.jpeg"
      }
    ];
    return { games };
  }
}
