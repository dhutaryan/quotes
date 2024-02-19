import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote, QuoteQuery } from './types';
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
    return this._http.get<Quote>(environment.api + '/random');
  }

  public search(query: QuoteQuery): Observable<Pagination<Quote>> {
    const payload: QuoteQuery = { page: query.page };

    if (query.author) {
      payload.author = query.author;
    }

    const params = this._utilsService.buildQueryParams(payload);

    return this._http.get<Pagination<Quote>>(environment.api + '/quotes', {
      params,
    });
  }
}
