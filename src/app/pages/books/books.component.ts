import { Component } from '@angular/core';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {}