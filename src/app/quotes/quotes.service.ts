import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Quote } from './types';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private readonly http: HttpClient) {}

  public random(): Observable<Quote> {
    return this.http.get<Quote>(environment.api + '/random');
  }
}
