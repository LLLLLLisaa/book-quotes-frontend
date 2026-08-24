import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@/components/header/header.component';
import { QuoteService } from '@/services/quote.service';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css'
})
export class QuoteFormComponent implements OnInit {

  quoteForm;

  quoteId?: number;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.quoteForm = this.fb.group({
      text: ['', Validators.required],
      source: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }
  
    const quote = {
      text: this.quoteForm.value.text!,
      source: this.quoteForm.value.source!
    };
  
    this.quoteService.addQuote(quote).subscribe({
      next: () => {
        this.router.navigate(['/quotes']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}