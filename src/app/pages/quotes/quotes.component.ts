import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '@/components/header/header.component';
import { QuoteCardComponent } from '@/components/quote-card/quote-card.component';

import { Quote } from '@/models/quote';
import { QuoteService } from '@/services/quote.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    QuoteCardComponent
  ],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(
    private quoteService: QuoteService
  ) {}

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe({
      next: (quotes) => {
        this.quotes = quotes;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteQuote(id: number): void {
    this.quoteService.deleteQuote(id).subscribe({
      next: () => {
        this.quotes = this.quotes.filter(
          quote => quote.id !== id
        );
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}