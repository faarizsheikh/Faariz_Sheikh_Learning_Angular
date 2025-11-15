import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HoverHighlightDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
}
