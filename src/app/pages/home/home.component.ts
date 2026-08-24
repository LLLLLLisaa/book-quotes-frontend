import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { BookCardComponent} from '@/components/book-card/book-card.component';
import {Book} from '@/models/book';
import { BookService } from '@/services/book.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RouterLink,BookCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

    books: Book[] = [];
  
    constructor(private bookService: BookService) {}
  
    ngOnInit(): void {
      this.bookService.getBooks().subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }

    deleteBook(id: number): void {
        this.bookService.deleteBook(id).subscribe({
          next: () => {
            this.books = this.books.filter(book => book.id !== id);
          },
          error: (error) => {
            console.error(error);
          }
        });
      }
  }