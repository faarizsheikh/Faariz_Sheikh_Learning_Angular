import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HoverHighlightDirective } from '../directives/hover-highlight.directive';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, HoverHighlightDirective],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.scss']
})

export class ModifyListItem {
  constructor(private router: Router) { }

  addNewGame() {
    this.router.navigate(['/modify/new']);
  }
}
