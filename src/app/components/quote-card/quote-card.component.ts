import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Quote } from '@/models/quote';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quote-card.component.html',
  styleUrl: './quote-card.component.css'
})
export class QuoteCardComponent {

  @Input() quote!: Quote;

  @Output() delete = new EventEmitter<number>();

  deleteQuote(): void {
    this.delete.emit(this.quote.id);
  }

}