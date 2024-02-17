import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote } from './types';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private readonly http: HttpClient) {}

  public random(): Observable<Quote> {
    return this.http.get<Quote>('https://api.quotable.io/random');
  }
}
