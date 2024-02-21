import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public buildQueryParams(
    source: Record<
      string,
      | string
      | number
      | boolean
      | null
      | ReadonlyArray<string | number | boolean>
    >,
  ) {
    return source as {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    };
  }
}
