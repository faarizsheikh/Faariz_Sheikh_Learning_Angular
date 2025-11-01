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
      yearReleased: ['', [Validators.required, Validators.min(1970), Validators.max(new Date().getFullYear())]],
      platform: ['', Validators.required],
      isCompleted: [false],
      notes: [''],
      imageUrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // CHECK: If id has route for editing (source: https://v17.angular.io/api/router/ActivatedRouteSnapshot )
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.currentId = Number(idParam);
      this.isEditMode = true;
      this.gameService.getById(this.currentId).subscribe(game => {
        if (game) { /* source: https://v17.angular.io/api/router/ActivatedRouteSnapshot#parammap */
          this.gameForm.patchValue(game);
        }
      });
    }
  }

  submitForm() {
    if (this.gameForm.invalid) return;

    const formValue: MyData = this.gameForm.value;

    if (this.isEditMode) {
      this.gameService.update(formValue).subscribe(() => {
        this.router.navigate(['/games']); // Returns to list
      });
    } else {
      this.gameService.create(formValue).subscribe(() => {
        this.router.navigate(['/games']); // Returns to list
      });
    }
  }

  protected readonly isFormControl = isFormControl;
}
