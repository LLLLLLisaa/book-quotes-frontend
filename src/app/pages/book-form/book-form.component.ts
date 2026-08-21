import { Component } from '@angular/core';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

}