import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, first } from 'rxjs';

import { QuotesService } from '../../quotes.service';
import { Quote } from '../../types';

@Component({
  selector: 'qt-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomQuoteComponent implements OnInit {
  public quote$ = new Subject<Quote | null>();
  public isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly _quotesService: QuotesService) {}

  ngOnInit(): void {
    this._fetchQuote();
  }

  public nextQuote(): void {
    this._fetchQuote();
  }

  private _fetchQuote(): void {
    this.quote$.next(null);
    this.isLoading$.next(true);

    this._quotesService
      .random()
      .pipe(first())
      .subscribe({
        next: (quote) => this.quote$.next(quote),
        complete: () => this.isLoading$.next(false),
      });
  }
}
