import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-page-not-found',
  imports: [
    RouterLink,
    HoverHighlightDirective,
  ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss'
})

export class PageNotFound {
}
