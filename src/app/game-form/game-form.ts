import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { GameDataService } from '../services/game-data';
import { MyData } from '../models/my-data';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './game-form.html',
  styleUrls: ['./game-form.css']
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
    // Check if route has id for editing
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.currentId = Number(idParam);
      this.isEditMode = true;
      this.gameService.getById(this.currentId).subscribe(game => {
        if (game) {
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
        this.router.navigate(['/modify']); // Returns to list
      });
    } else {
      this.gameService.create(formValue).subscribe(() => {
        this.router.navigate(['/modify']); // Return to list
      });
    }
  }
}

