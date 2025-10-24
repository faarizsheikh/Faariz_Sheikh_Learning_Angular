import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modify-list-item.html',
  styleUrls: ['./modify-list-item.css']
})
export class ModifyListItem implements OnInit {
  games: MyData[] = [];
  gameForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private gameService: GameDataService,
    private fb: FormBuilder,
    private router: Router
  ) {

    // Initialize: Reactive Form
    this.gameForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      developer: ['', Validators.required],
      genre: ['', Validators.required],
      yearReleased: ['', [Validators.required, Validators.min(1970)]],
      platform: ['', Validators.required],
      isCompleted: [false],
      notes: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getAll().subscribe(data => this.games = data);
  }

  toggleStatus(game: MyData) {
    const updated = { ...game, isCompleted: !game.isCompleted };
    this.gameService.update(updated).subscribe(() => this.loadGames());
  }

  editGame(game: MyData) {
    this.isEditMode = true;
    this.gameForm.patchValue(game);
    this.router.navigate(['/modify-form']); // Redirects to a form route if separate.
  }

  deleteGame(game: MyData) {
    this.gameService.delete(game.id).subscribe(() => this.loadGames());
  }

  submitForm() {
    if (this.gameForm.invalid) return;

    const formValue: MyData = this.gameForm.value;
    if (this.isEditMode) {
      this.gameService.update(formValue).subscribe(() => {
        this.isEditMode = false;
        this.loadGames();
        this.gameForm.reset();
      });
    } else {
      this.gameService.create(formValue).subscribe(() => {
        this.loadGames();
        this.gameForm.reset();
      });
    }
  }
}
