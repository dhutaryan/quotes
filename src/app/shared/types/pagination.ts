export interface Paginator {
  page: number;
  totalPages: number;
}

export interface Pagination<T> extends Paginator {
  results: T[];
  count: number;
  totalCount: number;
  lastItemIndex: number;
}
