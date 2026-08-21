import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '@/components/header/header.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

}