export interface Pagination<T> {
  results: T[];
  page: number;
  totalPages: number;
  count: number;
  totalCount: number;
  lastItemIndex: number;
}
