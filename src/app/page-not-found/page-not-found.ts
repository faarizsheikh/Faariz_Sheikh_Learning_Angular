import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-page-not-found',
  imports: [
    RouterLink,
    HoverHighlightDirective,
    MatIconModule,
    MatMiniFabButton,
    RouterLinkActive,
    MatTooltip,
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss'
})

export class PageNotFound {
}
