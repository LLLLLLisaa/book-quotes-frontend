import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '@/services/book.service';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule,HeaderComponent],
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
  })
export class BookFormComponent implements OnInit{
    bookForm;

    bookId?: number;
    isEditMode = false;


  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publicationDate: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{4}\.\d{2}\.\d{2}$/)
        ]
      ]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
        this.isEditMode = true;
        this.bookId = Number(id);

        this.bookService.getBook(this.bookId).subscribe({
        next: (book) => {
            this.bookForm.patchValue({
            title: book.title,
            author: book.author,
            publicationDate: book.publicationDate
            .substring(0, 10)
            .replaceAll('-', '.')
            });
        },
        error: (err) => {
            console.error(err);
        }
        });
    }
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
  
    if (this.isEditMode && this.bookId) {
      this.bookService.updateBook(this.bookId, book).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  
      return;
    }
  
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