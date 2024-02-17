import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject, first } from 'rxjs';

import { QuotesService } from '../../quotes.service';
import { Quote } from '../../types';

@Component({
  selector: 'qt-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomQuoteComponent implements OnInit {
  public quote$ = new Subject<Quote>();

  constructor(private readonly _quotesService: QuotesService) {}

  ngOnInit(): void {
    this._fetchQuote();
  }

  public nextQuote(): void {
    this._fetchQuote();
  }

  private _fetchQuote(): void {
    this._quotesService
      .random()
      .pipe(first())
      .subscribe((quote) => this.quote$.next(quote));
  }
}
