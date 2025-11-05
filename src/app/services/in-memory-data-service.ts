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
        imageUrl: "assets/fnaf.jpeg"
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
        imageUrl: "assets/rainman.jpeg"
      },
      { id: 6,
        title: "Piggy: Book 1 (Roblox)", developer: "MiniToon (Kohl Couture), IK3As",
        genre: "Action-Adventure, Episodic, Multiplayer, Puzzle/Strategy, Survival Horror", yearReleased: 2020,
        platform: "Roblox", isCompleted: false,
        notes: "Creative horror challenges with a memorable storyline.",
        imageUrl: "assets/blox_piggy.jpeg"},
      { id: 7,
        title: "Baldi\'s Basics in Education & Learning", developer: "Mystman12 (Micah McGonigal), Basically Games",
        genre: "Action-Adventure, Educational, Indie, Puzzle/Strategy, Survival Horror", yearReleased: 2018,
        platform: "PC", isCompleted: false,
        notes: "Fun and quirky educational horror experience.",
        imageUrl: "assets/baldis_basics_edu_learn.jpeg"},
      { id: 8,
        title: "Schoolboy Runaway", developer: "Linked Squad",
        genre: "Action-Adventure, Indie, Puzzle/Strategy, Stealth", yearReleased: 2024,
        platform: "PC", isCompleted: true,
        notes: "Stealth mechanics are unique and engaging.",
        imageUrl: "assets/schoolboy_runaway.jpeg"},
      { id: 9,
        title: "Baby in Yellow", developer: "TeamTerrible",
        genre: "Adventure, Indie, Puzzle/Strategy Simulation", yearReleased: 2020,
        platform: "iOS", isCompleted: true,
        notes: "Freaked me out. At first it was funny babysitting," +
          "but the supernatural stuff made it scary and gave me chills.",
        imageUrl: "assets/baby_yellow.jpeg"},
      { id: 10,
        title: "Subway Surfers", developer: "SYBO Games",
        genre: "Endless Runner", yearReleased: 2020,
        platform: "iOS", isCompleted: false,
        notes: "I play this all the time. It felt fast, colorful, and fun," +
          "especially with the hoverboards and characters. Addictive for killing time.",
        imageUrl: "assets/subway_surfers.jpeg"},
      { id: 11,
        title: "Murder Mystery 2 (Roblox)", developer: "Nikilis",
        genre: "Horror, Social Deduction, Survival", yearReleased: 2002,
        platform: "PC", isCompleted: false,
        notes: "Fast-paced and unpredictable gameplay that" +
          "mixes strategy, deception, and survival." +
          "The tension of not knowing who the murderer is makes every round thrilling.",
        imageUrl: "assets/mm2.jpeg"},
    ];
    return { games };
  }
}
