import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public buildQueryParams(source: object): HttpParams {
    return source as HttpParams;
  }
}
