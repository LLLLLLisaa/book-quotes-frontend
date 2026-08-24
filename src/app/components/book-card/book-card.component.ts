import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Book } from '@/models/book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() book!: Book;

  @Output() delete = new EventEmitter<number>();

  deleteBook(): void {
    this.delete.emit(this.book.id);
  }

}