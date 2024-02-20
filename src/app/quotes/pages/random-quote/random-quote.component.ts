import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { first } from 'rxjs';

import { QuotesService } from '../../quotes.service';
import { Quote } from '../../types';

@Component({
  selector: 'qt-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomQuoteComponent implements OnInit {
  public quote = signal<Quote | null>(null);
  public isLoading = signal(false);

  constructor(private readonly _quotesService: QuotesService) {}

  ngOnInit(): void {
    this._fetchQuote();
  }

  public nextQuote(): void {
    this._fetchQuote();
  }

  private _fetchQuote(): void {
    const current = this.quote();
    this.isLoading.set(true);

    this._quotesService
      .random()
      .pipe(first())
      .subscribe({
        next: (quote) => this.quote.set(quote),
        error: () => this.quote.set(current),
        complete: () => this.isLoading.set(false),
      });
  }
}
