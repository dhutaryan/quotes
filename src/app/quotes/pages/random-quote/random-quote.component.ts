import { ChangeDetectionStrategy, Component } from '@angular/core';

import { QuotesService } from '../../quotes.service';

@Component({
  selector: 'qt-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomQuoteComponent {
  public quote$ = this.quotesService.random();

  constructor(private readonly quotesService: QuotesService) {}
}