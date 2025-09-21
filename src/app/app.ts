import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('FaarizSheikhLearnAngular');
  // Let's make a variable


  /*
  Assignment 1 variables not needed:
  name : string = "Faariz";
  number : number = 6;
  opinion : string = "Awesome";
   */


  /* Once you assign a var type, it's forever that type */
  // name = 7; <- not allowed
}
