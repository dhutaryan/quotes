import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote } from './types';
import { environment } from '../../environments/environment';
import { Pagination } from '../shared/types';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private readonly _http: HttpClient) {}

  public random(): Observable<Quote> {
    return this._http.get<Quote>(environment.api + '/random');
  }

  public search(): Observable<Pagination<Quote>> {
    return this._http.get<Pagination<Quote>>(environment.api + '/quotes');
  }
}
