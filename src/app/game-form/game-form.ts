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
import { HighlightOnFocusDirective } from '../directives/form-focus-highlight.directives';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightOnFocusDirective],
  templateUrl: './game-form.html',
  styleUrls: ['./game-form.scss']
})

export class GameForm implements OnInit {
  gameForm: FormGroup;
  isEditMode: boolean = false;
  /**
   * Added trim
   * In case if I ever add extra space(s) accidentally and enable the error message box
   **/
  errorMessage: string = ''.trim();
  Date = new Date().getFullYear();
  currentId?: number;

  constructor(
    private fb: FormBuilder,
    private gameService: GameDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.gameForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, this.noWhitespaceValidator]],
      sequentialNumbering: ['', [Validators.max(1000), Validators.min(0), this.integerValidator]],
      developer: ['', [Validators.required, this.noWhitespaceValidator]],
      genre: ['', [Validators.required, this.noWhitespaceValidator]],
      yearReleased: [
        '',
        [Validators.required, Validators.max(this.Date), Validators.min(1950), this.integerValidator]
      ],
      platform: ['', [Validators.required, this.noWhitespaceValidator]],
      price: ['', [Validators.max(99999), Validators.min(0), this.blockInvalidPrice]],
      isCompleted: [false],
      notes: [''],
      imageUrl: ['', [Validators.required, this.noWhitespaceValidator]],
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

    if (controls['title'].hasError('whitespace'))
      messages.push('Title is required.');
    if (controls['sequentialNumbering'].hasError('min') || controls['sequentialNumbering'].hasError('max'))
      messages.push(`Sequential number must be between 0 and 1000.`);
    if (controls['sequentialNumbering'].hasError('notInteger'))
      messages.push('Sequential number must be a whole number.');
    if (controls['developer'].hasError('whitespace'))
      messages.push('Developer is required.');
    if (controls['genre'].hasError('whitespace'))
      messages.push('Genre is required.');
    if (controls['yearReleased'].hasError('required'))
      messages.push('Year of release is required.');
    if (controls['yearReleased'].hasError('min') || controls['yearReleased'].hasError('max'))
      messages.push(`Year must be between 1950 and ${this.Date}.`);
    if (controls['yearReleased'].hasError('notInteger'))
      messages.push('Year must be a whole number.');
    if (controls['platform'].hasError('whitespace'))
      messages.push('Platform is required.');
    if (controls['imageUrl'].hasError('whitespace'))
      messages.push('Image URL is required.');
    if (controls['price'].hasError('required'))
      messages.push('Price is required.');
    if (controls['price'].hasError('min') || controls['price'].hasError('max'))
      messages.push(`Price must be between 0 (free) and 99999.`);
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
          '⚠️ Operation failed. Try again later. If it persists, contact support at +1 (123) 456 7890.')
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

  // CHECK: For extra whitespaces
  noWhitespaceValidator(control: any) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  // CHECK: For whole number inputs.
  integerValidator(control: any) {
    const value = control.value;
    if (value === null || value === undefined || value === '') return null;
    return Number.isInteger(Number(value)) ? null : { notInteger: true };
  }

  /* PREVENTING: Certain input characters for number inputs, depending on form field */
  blockInvalidKeys(event: KeyboardEvent) {
    const invalidKeys = ['e', 'E', '+', '-', '.'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  blockInvalidPrice(event: KeyboardEvent) {
    const invalidKeys = ['e', 'E', '+', '-'];
    if (invalidKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  protected readonly isFormControl = isFormControl;
}
