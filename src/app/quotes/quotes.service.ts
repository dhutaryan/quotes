import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote, QuotePagination } from './types';
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

  public search(pagination: QuotePagination): Observable<Pagination<Quote>> {
    const params = this._utilsService.buildQueryParams(pagination);

    return this._http.get<Pagination<Quote>>(environment.api + '/quotes', {
      params,
    });
  }
}
