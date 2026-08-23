import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';
import { BookCardComponent, Book } from '@/components/book-card/book-card.component';
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
  }