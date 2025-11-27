import { Component } from '@angular/core';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HoverHighlightDirective, MatIconModule, MatMiniFabButton, MatTooltip, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  constructor(private router: Router) { }

  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
