import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '@/services/book.service';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [ReactiveFormsModule,HeaderComponent],
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
  })
export class BookFormComponent {

  bookForm;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publicationDate: ['']
    });
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const book = {
      title: this.bookForm.value.title!,
      author: this.bookForm.value.author!,
      publicationDate: this.bookForm.value.publicationDate!
    };

    this.bookService.addBook(book).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}