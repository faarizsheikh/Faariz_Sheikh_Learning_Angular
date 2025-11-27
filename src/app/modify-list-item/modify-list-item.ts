import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, HoverHighlightDirective, MatIconModule, MatMiniFabButton, RouterLinkActive, MatTooltip],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.scss']
})

export class ModifyListItem {
  constructor(private router: Router) { }

  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
