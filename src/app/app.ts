import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HoverHighlightDirective, MatIconModule, MatMiniFabButton, MatTooltip],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  constructor(private router: Router) {}

  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
