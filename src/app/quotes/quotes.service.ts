import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, race } from 'rxjs';

import {
  Quote,
  QuoteDummyJson,
  QuoteQuery,
  QuoteQuotable,
  QuoteQuoteGarden,
} from './types';
import { environment } from '../../environments/environment';
import { Pagination } from '../shared/types';
import { UtilsService } from '../core/services';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _utilsService: UtilsService,
  ) {}

  public random(): Observable<Quote> {
    return race([
      this._randomQuotable(),
      this._randomQuoteGarden(),
      this._randomDummyJson(),
    ]);
  }

  public search(query: QuoteQuery): Observable<Pagination<QuoteQuotable>> {
    const payload: QuoteQuery = { page: query.page };

    if (query.author) {
      payload.author = query.author;
    }

    const params = this._utilsService.buildQueryParams(payload);

    return this._http.get<Pagination<QuoteQuotable>>(
      environment.quotableApi + '/quotes',
      {
        params,
      },
    );
  }

  private _randomQuotable(): Observable<Quote> {
    return this._http
      .get<QuoteQuotable>(environment.quotableApi + '/random')
      .pipe(
        map((quote) => ({
          _id: quote._id,
          content: quote.content,
          author: quote.author,
        })),
      );
  }

  private _randomQuoteGarden(): Observable<Quote> {
    return this._http
      .get<QuoteQuoteGarden>(environment.quoteGardenApi + '/quotes/random')
      .pipe(
        map((quote) => ({
          _id: quote.data[0]._id,
          content: quote.data[0].quoteText,
          author: quote.data[0].quoteAuthor,
        })),
      );
  }

  private _randomDummyJson(): Observable<Quote> {
    return this._http
      .get<QuoteDummyJson>(environment.dummyJsonApi + '/quotes/random')
      .pipe(
        map((quote) => ({
          _id: quote.id,
          content: quote.quote,
          author: quote.author,
        })),
      );
  }
}
