import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  isFormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { GameDataService } from '../services/game-data-service';
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
      title: ['', [Validators.required]],
      developer: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      yearReleased: ['', [Validators.required, Validators.min(1950), Validators.max(this.Date)]],
      platform: ['', [Validators.required]],
      price: ['', [Validators.required]],
      isCompleted: [false],
      notes: [''],
      imageUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEditMode = true;
      this.currentId = id;

      this.gameService.getGameById(id).subscribe(game => {
        if (game) {
          this.gameForm.patchValue(game);
        }
      });
    }
  }

  private collectValidationErrors(): string[] {
    const messages: string[] = [];
    const controls = this.gameForm.controls;

    if (controls['title'].hasError('required'))
      messages.push('Title is required.');
    if (controls['developer'].hasError('required'))
      messages.push('Developer is required.');
    if (controls['genre'].hasError('required'))
      messages.push('Genre is required.');
    if (controls['yearReleased'].hasError('required'))
      messages.push('Year of release is required.');
    if (controls['yearReleased'].hasError('min') || controls['yearReleased'].hasError('max'))
      messages.push(`Year must be between 1950 and ${this.Date}.`);
    if (controls['platform'].hasError('required'))
      messages.push('Platform is required.');
    if (controls['price'].hasError('required'))
      messages.push('Price is required.');
    if (controls['price'].hasError('min'))
      messages.push('Price must be a positive number.');
    if (controls['imageUrl'].hasError('required'))
      messages.push('Image URL is required.');

    return messages;
  }

  submitForm(): void {
    if (this.gameForm.valid) {
      this.errorMessage = '';
      const game: MyData = this.gameForm.value;

      const request$ = this.isEditMode
        ? this.gameService.updateGame(game)
        : this.gameService.addGame(game);

      request$.subscribe({
        next: () => this.router.navigate(['/games']),
        error: () =>
          (this.errorMessage =
            '⚠️ Operation failed. Try again later. If it persists, contact support.')
      });
    } else {
      const errors = this.collectValidationErrors();
      this.errorMessage = errors.join(' ');
      this.gameForm.markAllAsTouched();
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
