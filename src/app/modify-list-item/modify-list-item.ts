import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, HoverHighlightDirective, MatIconModule, MatMiniFabButton, MatTooltip, RouterLink, RouterLinkActive],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.scss'],
  host: { class: 'page-modify-list-item' },
})

export class ModifyListItem {
  constructor(private router: Router) { }

  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
