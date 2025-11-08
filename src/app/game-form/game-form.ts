import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  isFormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './game-form.html',
  styleUrls: ['./game-form.scss']
})

export class GameForm implements OnInit {
  gameForm: FormGroup;
  isEditMode: boolean = false;
  errorMessage: string = '';
  Date = new Date().getFullYear();
  currentId?: number;


  constructor(
    private fb: FormBuilder,
    private gameService: GameDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gameForm = this.fb.group({
      /*
      VALIDATION - MOST code was removed due to the form not being able to submit. It's bonus anyway :(
      (Sense of humour. Not to be taken seriously.)
      * Though, it was working before...
      * I must've done something like removing/changing something after successful run of the validations.
      * I will look into it more later, for sure. I am interested in this bonus part.
      */
      id: [''],
      title: ['', Validators.required],
      developer: ['', Validators.required],
      genre: ['', Validators.required],
      yearReleased: ['', [Validators.required]],
      platform: ['', Validators.required],
      price: ['', [Validators.required]],
      isCompleted: [false],
      notes: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEditMode = true; // ✅ Mark as edit mode
      this.currentId = id;

      this.gameService.getGameById(id).subscribe(game => {
        if (game) {
          this.gameForm.patchValue(game);
        }
      });
    }
  }

  submitForm(): void {
    if (this.gameForm.valid) {
      this.errorMessage = '';
      const game: MyData = this.gameForm.value;

      if (game.id) {
        this.gameService.updateGame(game).subscribe({
          next: () => this.router.navigate(['/games']),
          error: () =>
            this.errorMessage =
              '⚠️ Failed to update game.' +
              'Try again later.' +
              'If the issue still persists, contact support at +1 (123) 456 7890.'
        });
      } else {
        this.gameService.addGame(game).subscribe({
          next: () => this.router.navigate(['/games']),
          error: () =>
            this.errorMessage =
              '⚠️ Failed to add game.' +
              'Try again later.' +
              'If the issue still persists, contact support at +1 (123) 456 7890.'
        });
      }
    }
  }

  onDelete(): void {
    const id = this.gameForm.value.id;
    if (id) {
      this.errorMessage = '';
      this.gameService.deleteGame(id).subscribe({
        next: () => this.router.navigate(['/games']),
        error: () =>
          this.errorMessage =
            '⚠️ Failed to delete game.' +
            'Try again later.' +
            'If the issue still persists, contact support at +1 (123) 456 7890.'
      });
    }
  }

  protected readonly isFormControl = isFormControl;
}
