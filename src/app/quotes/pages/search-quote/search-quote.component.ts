import { ChangeDetectionStrategy, Component } from '@angular/core';

import { QuotesService } from '../../quotes.service';

@Component({
  selector: 'qt-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrl: './search-quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchQuoteComponent {
  public quotes$ = this._quotesService.search();

  constructor(private readonly _quotesService: QuotesService) {}
}
